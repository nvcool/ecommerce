import { AdminHeader } from "../AdminHeader";
import { CustomersContent } from "./CustomersContent";

export const Customers = () => {
  return (
    <section>
      <AdminHeader
        breadcrumbs={[
          { link: "/admin/customers", text: "Admin" },
          { text: "Customers" },
        ]}
      />
      <CustomersContent />
    </section>
  );
};
