import { Input } from "../../ui/Input";
import { SvgSearch } from "../../ui/svg/SvgSearch";
import { OrdersList } from "./OrdersList";

export const OrdersContent = () => {
  return (
    <section className="bg-white-900 rounded-lg">
      <div className="flex items-center justify-between py-6 pr-10 pl-12">
        <h4 className="text-lg leading-normal font-medium">Orders</h4>
        <div className="flex gap-4">
          <label className="relative">
            <SvgSearch className="text-black-500 absolute top-[12px] left-[15px] cursor-pointer" />
            <Input className="pl-10" placeholder="Search products" />
          </label>
        </div>
      </div>

      <div className="">
        <OrdersList />
      </div>
    </section>
  );
};
