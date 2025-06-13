import { useMutation } from "@tanstack/react-query";
import tShirt from "../../../assets/products/t-shirt-1.png";
import type { IOrder } from "../../../types/IOrder";
import { DropdownMenu } from "../../ui/DropdownMenu";
import { SvgSort } from "../../ui/svg/SvgSort";
import { ordersApi } from "../../../lib/queriesOrders";
import { queryClient } from "../../../App";

interface IOrdersTableProps {
  orders?: IOrder[];
}

export const OrdersTable = ({ orders }: IOrdersTableProps) => {
  const { mutate: deleteOrders } = useMutation({
    mutationFn: ordersApi.deleteOrder,
    onSuccess: () => {
      //exact: false Нужно ли, есть ли вариант по лучше
      //p.s. Искал решение, после удаления не отрисовывался результат, только после принудительно перезагузки страницы
      //p.s.2. Как понял такой подход запрашивает по ключу вообще все ['orders'], что в свою очаредь вызывает нагрузку мощную если товаров много, нужен обход
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });

  const handleDelete = (id: string) => {
    deleteOrders(id);
  };

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
              <DropdownMenu
                buttonClassName="p-4"
                editLink={`/orders/edit-orders/${order.id}`}
                handleDelete={() => handleDelete(order.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
