import { useMutation } from "@tanstack/react-query";
import type { ICustomer } from "../../../types/ICustomer";
import { customersApi } from "../../../lib/queriesCustomers";
import { FormCustomer } from "../formProduct/FormCustomer";

type ICustomersEditorProps = {
  customer?: ICustomer;
};

export const CustomersEditor = ({ customer }: ICustomersEditorProps) => {
  const {
    mutate: editCustomer,
    isSuccess: editSuccess,
    error: editError,
    isPending: editPending,
  } = useMutation({
    mutationFn: customersApi.putCustomer,
  });

  return (
    <section className="bg-white-900 flex flex-col rounded-lg">
      <div className="border-white-200 mb-16 flex items-center justify-between border-b py-6 pr-10 pl-12">
        <h4 className="text-lg leading-normal font-medium">
          {customer ? "Edit" : "Add"} Customer
        </h4>
      </div>

      {editSuccess && (
        <span className="mx-auto block text-2xl">YEP YEP DOING !</span>
      )}
      {editError && (
        <span className="mx-auto block text-2xl">{editError.message}</span>
      )}

      <FormCustomer
        customer={customer}
        onSubmit={(parametr) =>
          customer && editCustomer({ id: customer.id, customerData: parametr })
        }
        isLoading={editPending}
        isSuccess={editSuccess}
      />
    </section>
  );
};
