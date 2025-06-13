import { useParams } from "react-router";
import { AdminHeader } from "../AdminHeader";
import { useQuery } from "@tanstack/react-query";
import { customersApi } from "../../../lib/queriesCustomers";
import { CustomersEditor } from "./CustomersEditor";

export const CustomersEdit = () => {
  const { id } = useParams();

  const { data: customer } = useQuery({
    queryKey: ["customers", id],
    queryFn: () => customersApi.getCustomerById(id!),
    enabled: !!id,
  });

  return (
    <section>
      <AdminHeader
        breadcrumbs={[
          { link: "/admin", text: "Admin" },
          { link: "/admin/customers", text: "Customers" },
          { text: "Edit Customers" },
        ]}
      />
      <CustomersEditor customer={customer} />
    </section>
  );
};
