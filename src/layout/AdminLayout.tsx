import { Outlet } from "react-router";
import { AdminSidebar } from "../components/admin/AdminSidebar";

export const AdminLayout = () => {
  return (
    <div className="grid h-full grid-cols-[260px_1fr] gap-12">
      <AdminSidebar />
      <div className="overflow-y-auto pr-12 pb-5">
        <Outlet />
      </div>
    </div>
  );
};
