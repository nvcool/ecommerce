import { Button } from "../../ui/Button";
import { Input } from "../../ui/Input";
import { SvgSearch } from "../../ui/svg/SvgSearch";
import { ClothingList } from "../../clothings/ClothingList";

export const ProductsContent = () => {
  return (
    <section className="bg-white-900 rounded-lg">
      <div className="flex items-center justify-between py-6 pr-10 pl-12">
        <h4 className="text-lg leading-normal font-medium">Products</h4>
        <div className="flex gap-4">
          <Button variant="filled">Add product</Button>
          <label className="relative">
            <SvgSearch className="text-black-500 absolute top-[12px] left-[15px] cursor-pointer" />
            <Input className="pl-10" placeholder="Search products" />
          </label>
        </div>
      </div>

      <div className="">
        <ClothingList />
      </div>
    </section>
  );
};
