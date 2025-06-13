import { Input } from "../../ui/input/Input";
import { Pagination } from "../../ui/Pagination";
import { SvgSearch } from "../../ui/svg/SvgSearch";
import { OrdersTable } from "./OrdersTable";
import { API_URL } from "../../../lib/queriesProducts";
import { useQuery } from "@tanstack/react-query";
import type { IOrder } from "../../../types/IOrder";
import type { IPaginationResponse } from "../../../types/IPaginationResponse";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../store";
import { setPage } from "./ordersSlice";

const getAllOrders = async (page: number, limit: number) => {
  const res = await fetch(`${API_URL}/orders?_page=${page}&_per_page=${limit}`);
  return (await res.json()) as IPaginationResponse<IOrder>;
};

export const OrdersContent = () => {
  const pagination = useSelector((state: RootState) => state.ordersPage);
  const dispatch = useDispatch();

  const {
    data: orders,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["orders", pagination.page, pagination.limit],
    queryFn: () => getAllOrders(pagination.page, pagination.limit),
  });

  if (isLoading) return <h1 className="text-center text-3xl">Loading...</h1>;
  if (isError)
    return (
      <div className="text-center text-3xl text-red-900">
        Error: {(error as Error).message}
      </div>
    );

  return (
    <section className="bg-white-900 flex h-[727px] flex-col rounded-lg">
      <div className="flex items-center justify-between py-6 pr-10 pl-12">
        <h4 className="text-lg leading-normal font-medium">Orders</h4>
        <div className="flex gap-4">
          <label className="relative">
            <SvgSearch className="text-black-500 absolute top-[12px] left-[15px] cursor-pointer" />
            <Input className="pl-10" placeholder="Search products" />
          </label>
        </div>
      </div>

      <div className="flex-grow overflow-auto">
        <OrdersTable orders={orders?.data} />
      </div>

      <Pagination
        pageCount={orders?.pages ? orders.pages : 1}
        pagination={pagination}
        onPageChange={(selected) => dispatch(setPage(selected))}
      />
    </section>
  );
};
