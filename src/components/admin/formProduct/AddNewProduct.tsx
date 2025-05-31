import { AdminHeader } from "../AdminHeader";
import { AddNewProductContent } from "./AddNewProductContent";

export const AddNewProduct = () => {
  return (
    <section>
      <AdminHeader
        breadcrumbs={[
          { link: "/admin/add-product", text: "Admin" },
          { text: "Add products" },
        ]}
      />
      <AddNewProductContent />
    </section>
  );
};
