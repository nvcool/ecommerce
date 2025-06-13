import { useParams } from "react-router";
import { AdminHeader } from "../AdminHeader";
import { ordersApi } from "../../../lib/queriesOrders";
import { useQuery } from "@tanstack/react-query";
import { OrdersEditor } from "./OrdersEditor";

export const OrdersEdit = () => {
  const { id } = useParams();

  const { data: orders } = useQuery({
    queryKey: ["orders", id],
    queryFn: () => ordersApi.getOrderById(id!),
    enabled: !!id,
  });

  return (
    <section>
      <AdminHeader
        breadcrumbs={[
          { link: "/admin", text: "Admin" },
          { link: "/admin/orders", text: "Orders" },
          { text: "Edit orders" },
        ]}
      />
      <OrdersEditor order={orders} />
    </section>
  );
};
