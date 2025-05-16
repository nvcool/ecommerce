import { SvgSort } from "../../ui/svg/SvgSort";

export const OrdersHeader = () => {
  return (
    <thead className="">
      <tr className="border-white-100 mb-8 ml-[67px] items-center border-y text-left">
        <th className="py-2.5 pl-[67px]">
          <SvgSort />
        </th>
        <th className="font-medium">Order</th>
        <th className="font-medium">Date</th>
        <th className="font-medium">Total</th>
        <th className="font-medium">Status</th>
        <th className="font-medium">Action</th>
      </tr>
    </thead>
  );
};
