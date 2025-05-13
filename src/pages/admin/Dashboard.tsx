import { AdminHeader } from "../../components/admin/AdminHeader";
import { DashboardContent } from "../../components/admin/dashboard/DashboardContent";

export const Dashboard = () => {
  return (
    <div className="grid h-fit">
      <AdminHeader
        breadcrumbs={[
          { link: "/admin/dashboard", text: "Admin" },
          { text: "Dashboard" },
        ]}
      />
      <DashboardContent />
    </div>
  );
};

// Сделать ли сайдбар по типу layout?
// Стейты писать прямо в слайсах?
// Архитектура / структура?
// Просто что поправить?
