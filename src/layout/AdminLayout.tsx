import { Outlet } from "react-router";
import { AdminSidebar } from "../components/admin/dashboard/DashboardSidebar";

export const AdminLayout = () => {
  return (
    <div className="grid h-full grid-cols-[260px_1fr] gap-12 pr-12">
      <AdminSidebar />
      <Outlet />
    </div>
  );
};
