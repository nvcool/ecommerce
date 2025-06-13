import { useMutation } from "@tanstack/react-query";
import type { IOrder } from "../../../types/IOrder";
import { ordersApi } from "../../../lib/queriesOrders";
import { FormOrder } from "../formProduct/FormOrder";
import { useQuery } from "@tanstack/react-query";
import { productsApi } from "../../../lib/queriesProducts";

interface IOrdersEditorProps {
  order?: IOrder;
}

export const OrdersEditor = ({ order }: IOrdersEditorProps) => {
  const {
    mutate: editOrder,
    isSuccess: editSuccess,
    error: editError,
    isPending: editPending,
  } = useMutation({
    mutationFn: ordersApi.putOrder,
  });

  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: () => productsApi.getAllProducts(1, 99999, ""),
  });
  return (
    <section className="bg-white-900 flex flex-col rounded-lg">
      <div className="border-white-200 mb-16 flex items-center justify-between border-b py-6 pr-10 pl-12">
        <h4 className="text-lg leading-normal font-medium">
          {order ? "Edit" : "Add"} product
        </h4>
      </div>

      {editSuccess && (
        <span className="mx-auto block text-2xl">YEP YEP DOING !</span>
      )}
      {editError && (
        <span className="mx-auto block text-2xl">{editError.message}</span>
      )}

      {order && products && (
        <FormOrder
          products={products.data}
          order={order}
          onSubmit={(parametr) => {
            const productsData = parametr.products.map((product) => {
              const originalProduct = products.data.find(
                (item) => item.id === product.productId,
              );
              return {
                id: originalProduct?.id || "",
                images: originalProduct?.images || [],
                title: originalProduct?.title || "",
                sku: originalProduct?.sku || 0,
                price: originalProduct?.price || 0,
                stock: originalProduct?.stock || "",
                category: originalProduct?.category || "",
                date: originalProduct?.date || "",
                description: originalProduct?.description || "",
                color: { name: "", hex: "" },
                size: { name: product.size, amount: product.amount },
                quantity: product.amount,
              };
            });

            editOrder({ id: order.id, orderData: parametr, productsData });
          }}
          isLoading={editPending}
          isSuccess={editSuccess}
        />
      )}
    </section>
  );
};
