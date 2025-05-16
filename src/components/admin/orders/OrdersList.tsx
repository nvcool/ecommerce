import { OrdersHeader } from "./OrdersHeader";
import { OrdersItem } from "./OrdersItem";

export const OrdersList = () => {
  return (
    <table className="text-black-500 min-w-full border-spacing-8">
      <OrdersHeader />
      <OrdersItem />
    </table>
  );
};
