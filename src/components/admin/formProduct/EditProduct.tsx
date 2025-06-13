import { useQuery } from "@tanstack/react-query";
import { AdminHeader } from "../AdminHeader";
import { ProductEditor } from "./ProductEditor";
import { productsApi } from "../../../lib/queriesProducts";
import { useParams } from "react-router";

export const EditProduct = () => {
  const { id } = useParams();

  const { data: product } = useQuery({
    queryKey: ["products", id],
    queryFn: () => productsApi.getProductById(id!),
    enabled: !!id,
  });

  return (
    <section>
      <AdminHeader
        breadcrumbs={[
          { link: "/admin", text: "Admin" },
          { link: "/admin/products", text: "Products" },
          { text: "Edit product" },
        ]}
      />
      <ProductEditor product={product} />
    </section>
  );
};
