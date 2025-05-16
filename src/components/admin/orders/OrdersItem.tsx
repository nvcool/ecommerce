import { useQuery } from "@tanstack/react-query";
import tShirt from "../../../assets/products/t-shirt-1.png";
import { API_URL } from "../../../lib/query";
import { SvgMore } from "../../ui/svg/SvgMore";
import type { IOrders } from "../../../types/IOrders";

const getAllProducts = async () => {
  const res = await fetch(`${API_URL}/clothings`);
  return await res.json();
};

export const OrdersItem = () => {
  const { data: orders } = useQuery<IOrders[]>({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  return (
    <tbody className="font-medium">
      {orders &&
        orders.map((order) => (
          <tr
            className="border-white-100 items-center border-b px-8 py-4 font-medium"
            key={order.id}
          >
            <td className="w-[12%] py-4 pl-12">
              <img
                className="bg-white-100 rounded-sm px-2 pb-[3px]"
                src={tShirt}
                alt=""
              />
            </td>

            <td className="w-[25%]">{order.title}</td>
            <td className="w-[18%]">{order.date}</td>
            <td className="w-[15%]">{order.price}</td>
            <td>{order.status}</td>
            <td>
              <button className="cursor-pointer pl-3">
                <SvgMore />
              </button>
            </td>
          </tr>
        ))}
    </tbody>
  );
};
