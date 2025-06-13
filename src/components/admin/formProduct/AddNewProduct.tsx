import { AdminHeader } from "../AdminHeader";
import { ProductEditor } from "./ProductEditor";

export const AddNewProduct = () => {
  return (
    <section>
      <AdminHeader
        breadcrumbs={[
          { link: "/admin", text: "Admin" },
          { link: "/admin/products", text: "Products" },
          { text: "Add products" },
        ]}
      />
      <ProductEditor />
    </section>
  );
};
