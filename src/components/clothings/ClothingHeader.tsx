import { SvgSort } from "../../components/ui/svg/SvgSort";

export const ClothingHeader = () => {
  return (
    <thead className="">
      <tr className="border-white-100 mb-8 ml-[67px] items-center border-y text-left">
        <th className="py-2.5 pl-[67px]">
          <SvgSort />
        </th>
        <th className="font-medium">Name</th>
        <th className="font-medium">SKU</th>
        <th className="font-medium">Price</th>
        <th className="font-medium">Stock</th>
        <th className="font-medium">Categories</th>
        <th className="font-medium">Action</th>
      </tr>
    </thead>
  );
};
