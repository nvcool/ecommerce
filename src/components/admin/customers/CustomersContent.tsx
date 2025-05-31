import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../../lib/queriesProducts";
import type { ICustomer } from "../../../types/ICustomer";
import type { IPaginationResponse } from "../../../types/IPaginationResponse";
import { Input } from "../../ui/input/Input";
import { SvgSearch } from "../../ui/svg/SvgSearch";
import { CustomersTable } from "./CustomersTable";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../store";
import { Pagination } from "../../ui/Pagination";
import { setPage } from "./customersSlice";

const getAllCustomers = async (page: number, limit: number) => {
  const res = await fetch(
    `${API_URL}/customers?_page=${page}&_per_page=${limit}`,
  );
  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${res.statusText}`);
  } else {
    return (await res.json()) as IPaginationResponse<ICustomer>;
  }
};

export const CustomersContent = () => {
  const pagination = useSelector((state: RootState) => state.customersPage);
  const dispatch = useDispatch();

  const {
    data: customers,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["customers", pagination.page, pagination.limit],
    queryFn: () => getAllCustomers(pagination.page, pagination.limit),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {(error as Error).message}</div>;

  return (
    <section className="bg-white-900 flex h-[727px] flex-col rounded-lg">
      <div className="flex items-center justify-between py-6 pr-10 pl-12">
        <h4 className="text-lg leading-normal font-medium">Customers</h4>
        <div className="flex gap-4">
          <label className="relative">
            <SvgSearch className="text-black-500 absolute top-[12px] left-[15px] cursor-pointer" />
            <Input className="pl-10" placeholder="Search products" />
          </label>
        </div>
      </div>

      <div className="flex-grow">
        <CustomersTable customers={customers?.data} />
      </div>

      <Pagination
        pageCount={customers?.pages ? customers.pages : 1}
        pagination={pagination}
        onPageChange={(selected) => dispatch(setPage(selected))}
      />
    </section>
  );
};
