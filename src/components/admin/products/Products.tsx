import { AdminHeader } from "../AdminHeader";
import { ProductsContent } from "./ProductsContent";

export const Products = () => {
  return (
    <div className="grid h-fit">
      <AdminHeader
        breadcrumbs={[
          { link: "/admin/dashboard", text: "Admin" },
          { text: "Products" },
        ]}
      />
      <ProductsContent />
    </div>
  );
};

// Сделать ли сайдбар по типу layout?
// Стейты писать прямо в слайсах?
// Архитектура / структура?
// Просто что поправить?
