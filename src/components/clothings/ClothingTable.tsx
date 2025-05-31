import type { IProduct } from "../../types/IProduct";
import { SvgSort } from "../../components/ui/svg/SvgSort";
import tShirt from "../../assets/products/t-shirt-1.png";

import { useMutation } from "@tanstack/react-query";
import { productsApi } from "../../lib/queriesProducts";
import { queryClient } from "../../App";
import { DropdownMenu } from "../ui/DropdownMenu";

interface IClothingTableProps {
  products?: IProduct[];
}

export const ClothingTable = ({ products }: IClothingTableProps) => {
  const { mutate: deleteProduct } = useMutation({
    mutationFn: productsApi.deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  const handleDelete = (id: string) => {
    deleteProduct(id);
  };

  return (
    <table className="text-black-500 h- min-w-full border-spacing-8">
      <thead className="">
        <tr className="border-white-100 mb-8 ml-[67px] items-center border-y text-left">
          <th className="pl-[67px]">
            <button className="cursor-pointer py-2.5">
              <SvgSort />
            </button>
          </th>
          <th className="font-medium">Name</th>
          <th className="font-medium">SKU</th>
          <th className="font-medium">Price</th>
          <th className="font-medium">Stock</th>
          <th className="font-medium">Categories</th>
          <th className="font-medium">Action</th>
        </tr>
      </thead>

      <tbody className="font-medium">
        {products?.map((product) => (
          <tr
            className="border-white-100 items-center border-b px-8 py-4 font-medium last:border-b-0"
            key={product.id}
          >
            <td className="w-[12%] py-4 pl-12">
              <img
                className="bg-white-100 rounded-sm px-2 pb-[3px]"
                src={tShirt}
                alt=""
              />
            </td>

            <td className="w-[25%]">{product.title}</td>
            <td>{product.sku}</td>
            <td>{product.price}</td>
            <td>{product.stock}</td>
            <td>{product.category}</td>
            <td>
              <DropdownMenu
                buttonClassName="p-4"
                handleDelete={() => handleDelete(product.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
