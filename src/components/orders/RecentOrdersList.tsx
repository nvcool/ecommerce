import { RecentOrdersHeader } from "./RecentOrdersHeader";
import { RecentOrdersItem } from "./RecentOrdersItem";

export const RecentOrdersList = () => {
  return (
    <table className="w-full">
      <RecentOrdersHeader />
      <RecentOrdersItem />
    </table>
  );
};
