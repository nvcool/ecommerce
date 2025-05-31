import tShirt from "../../../assets/products/t-shirt-1.png";
import type { IOrder } from "../../../types/IOrder";
import { SvgMore } from "../../ui/svg/SvgMore";
import { SvgSort } from "../../ui/svg/SvgSort";

interface IOrdersTableProps {
  orders?: IOrder[];
}

export const OrdersTable = ({ orders }: IOrdersTableProps) => {
  return (
    <table className="text-black-500 min-w-full border-spacing-8">
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
      <tbody className="font-medium">
        {orders?.map((order) => (
          <tr
            className="border-white-100 items-center border-b p-2.5 px-8 py-4 font-medium last:border-b-0"
            key={order.id}
          >
            <td className="w-[12%] py-4 pl-12">
              <img
                className="bg-white-100 rounded-sm px-2 pb-[3px]"
                src={tShirt}
                alt=""
              />
            </td>

            <td className="w-[25%]">{order.id}</td>
            <td className="w-[18%]">{order.date}</td>
            <td className="w-[15%]">{order.total}</td>
            <td>{order.status}</td>
            <td>
              <button className="cursor-pointer pl-3">
                <SvgMore />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
