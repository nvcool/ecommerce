import { AdminHeader } from "../AdminHeader";
import { OrdersContent } from "./OrdersContent";

export const Orders = () => {
  return (
    <section className="grid h-fit">
      <AdminHeader
        breadcrumbs={[
          { link: "/admin/orders", text: "Admin" },
          { text: "Orders" },
        ]}
      />
      <OrdersContent />
    </section>
  );
};
