import { useMutation } from "@tanstack/react-query";
import { FormProduct } from "./FormProduct";
import { productsApi } from "../../../lib/queriesProducts";
import type { IProduct } from "../../../types/IProduct";

interface IProductEditorProps {
  product?: IProduct;
}

export const ProductEditor = ({ product }: IProductEditorProps) => {
  const {
    mutate: postProduct,
    isSuccess: postSuccess,
    error: postError,
    isPending: postPending,
  } = useMutation({
    mutationFn: productsApi.createProduct,
  });

  const {
    mutate: editProduct,
    isSuccess: editSuccess,
    error: editError,
    isPending: editPending,
  } = useMutation({
    mutationFn: productsApi.putProducts,
  });

  return (
    <section className="bg-white-900 flex flex-col rounded-lg">
      <div className="border-white-200 mb-16 flex items-center justify-between border-b py-6 pr-10 pl-12">
        <h4 className="text-lg leading-normal font-medium">
          {product ? "Edit" : "Add"} product
        </h4>
      </div>
      {postSuccess && (
        <span className="mx-auto block text-2xl">YEP YEP DOING !</span>
      )}
      {postError && (
        <span className="mx-auto block text-2xl">{postError.message}</span>
      )}

      {editSuccess && (
        <span className="mx-auto block text-2xl">YEP YEP DOING !</span>
      )}
      {editError && (
        <span className="mx-auto block text-2xl">{editError.message}</span>
      )}

      <FormProduct
        product={product}
        onSubmit={(parametr) =>
          product
            ? editProduct({ id: product.id, productData: parametr })
            : postProduct(parametr)
        }
        isLoading={postPending || editPending}
        isSuccess={postSuccess || editSuccess}
      />
    </section>
  );
};
