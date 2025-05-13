import { AdminHeader } from "../AdminHeader";
import { OrdersContent } from "./OrdersContent";

export const Orders = () => {
  return (
    <div className="grid h-fit">
      <AdminHeader
        breadcrumbs={[
          { link: "/admin/orders", text: "Admin" },
          { text: "Orders" },
        ]}
      />
      <OrdersContent />
    </div>
  );
};
