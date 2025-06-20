import { Link } from "react-router";
import { RecentOrdersList } from "../../recentOrders/RecentOrdersList";

export const DashboardRecentOrders = () => {
  return (
    <div>
      <div className="mb-5 flex gap-4 px-10 pt-8">
        <h5 className="text-base font-semibold">Recent Orders</h5>
        <Link
          to={"/admin/orders"}
          className="bg-white-100 hover:bg-white-200 cursor-pointer rounded-full px-4 py-0.5 transition-colors ease-in"
        >
          View All
        </Link>
      </div>

      <RecentOrdersList />
    </div>
  );
};
