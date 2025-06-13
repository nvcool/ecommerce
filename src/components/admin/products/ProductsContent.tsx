import { Button } from "../../ui/Button";
import { Input } from "../../ui/input/Input";
import { SvgSearch } from "../../ui/svg/SvgSearch";
import { ClothingTable } from "../../clothings/ClothingTable";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { API_URL, productsApi } from "../../../lib/queriesProducts";
import type { IPaginationResponse } from "../../../types/IPaginationResponse";
import type { IProduct } from "../../../types/IProduct";
import type { RootState } from "../../../store";
import { setPage } from "./productsSlice";
import { Pagination } from "../../ui/Pagination";
import { useState } from "react";
import { NavLink } from "react-router";

export const ProductsContent = () => {
  const [search, setSearch] = useState<string>("");

  const pagination = useSelector((state: RootState) => state.productsPage);
  const dispatch = useDispatch();

  const {
    data: products,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products", pagination.page, pagination.limit, search],
    queryFn: () =>
      productsApi.getAllProducts(pagination.page, pagination.limit, search),
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
        <h4 className="text-lg leading-normal font-medium">Products</h4>
        <div className="flex gap-4">
          <NavLink to={"/admin/products/add-product"}>
            <Button variant="filled">Add product</Button>
          </NavLink>
          <label className="relative">
            <SvgSearch className="text-black-500 absolute top-[12px] left-[15px] cursor-pointer" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
              placeholder="Search products"
            />
          </label>
        </div>
      </div>

      <div className="flex-grow overflow-auto">
        <ClothingTable products={products?.data} />
      </div>

      <Pagination
        pageCount={products?.pages ? products.pages : 1}
        pagination={pagination}
        onPageChange={(selected) => dispatch(setPage(selected))}
      />
    </section>
  );
};
