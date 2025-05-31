import { useMutation } from "@tanstack/react-query";
import { FormProduct } from "./FormProduct";
import { productsApi } from "../../../lib/queriesProducts";

export const AddNewProductContent = () => {
  const {
    mutate: postProduct,
    isSuccess,
    error,
    isPending,
  } = useMutation({
    mutationFn: productsApi.createProduct,
    onSuccess: () => {},
  });

  return (
    <section className="bg-white-900 flex flex-col rounded-lg">
      <div className="border-white-200 mb-16 flex items-center justify-between border-b py-6 pr-10 pl-12">
        <h4 className="text-lg leading-normal font-medium">Add product</h4>
      </div>

      {error && <span className="mx-auto block text-2xl">{error.message}</span>}

      <FormProduct
        onSubmit={(parametr) => postProduct(parametr)}
        isLoading={isPending}
        isSuccess={isSuccess}
      />
    </section>
  );
};
