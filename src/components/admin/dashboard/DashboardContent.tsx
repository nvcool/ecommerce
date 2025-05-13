import { DonutChart } from "../../charts/DonatChart";
import { LineChartComponent } from "../../charts/LineChart";
import ProgressBar from "../../charts/ProgressBar";
import { SimpleBarChart } from "../../charts/SimpleBarChart";
import { SvgMinus } from "../../ui/svg/SvgMinus";
import { DashboardRecentOrders } from "./DashboardRecentOrders";
// import { Info } from "../../ui/Info";
// import { InputContent } from "../../ui/InputContent";
// import { Successfully } from "../../ui/Successfully";
// import { Warning } from "../../ui/Warning";

export const DashboardContent = () => {
  return (
    <section className="grid gap-10">
      {/* <div className="grid gap-2">
        <InputContent placeholder="Name..." title="Name" />
        <Warning text="Enter correct name!" />
        <Successfully text="You have successfully logged in!" />
        <Info text="This item added to your Wishlist!" />
      </div> */}
      <div className="grid grid-cols-3 justify-between gap-10">
        <div className="bg-white-900 rounded-lg p-6">
          <div className="mb-[44px] flex items-center justify-between">
            <div className="">
              <h5 className="text-black-900 text-base font-semibold">
                Total Sales
              </h5>
              <span className="text-black-500 leading-[24px] tracking-[0.6px]">
                THIS MONTH
              </span>
            </div>
            <div className="">
              <h3 className="text-black-900 text-2xl font-bold">$ 4,235</h3>
            </div>
          </div>
          <SimpleBarChart />
        </div>
        <div className="bg-white-900 rounded-lg p-6">
          <div className="mb-[44px] flex items-center justify-between">
            <div className="">
              <h5 className="text-black-900 text-base font-semibold">
                Customers
              </h5>
              <span className="text-black-500 leading-[24px] tracking-[0.6px]">
                THIS MONTH
              </span>
            </div>
            <div className="">
              <h3 className="text-black-900 text-2xl font-bold">2,527</h3>
            </div>
          </div>
          <LineChartComponent />
        </div>
        <div className="bg-white-900 rounded-lg p-6">
          <div className="mb-[44px] flex items-center justify-between">
            <div className="">
              <h5 className="text-black-900 text-base font-semibold">Orders</h5>
              <span className="text-black-500 leading-[24px] tracking-[0.6px]">
                Monthly GOALS : 1,000
              </span>
            </div>
            <div className="">
              <h3 className="text-black-900 text-2xl font-bold">734</h3>
            </div>
          </div>
          <div className="pr-2">
            <span className="text-xs leading-[24px] font-medium capitalize">
              266 left
            </span>
            <ProgressBar />
          </div>
        </div>

        <div className="bg-white-900 rounded-lg">
          <div className="mb-8 px-8 pt-6">
            <h5 className="text-black-900 text-base font-semibold">
              Best Selling
            </h5>
            <span className="text-black-500 text-sm leading-[24px] font-medium tracking-[0.6px]">
              THIS MONTH
            </span>
          </div>
          <div className="border-white-200 border-t pt-8">
            <div className="mb-6 flex items-center gap-2 px-8">
              <h3 className="text-black-900 text-2xl font-bold">$2,527</h3>
              <SvgMinus />
              <span className="text-black-500 leading-[175%] font-medium">
                Total Sales
              </span>
            </div>

            {/* падинг не по макету снизу */}
            <div className="mb-8 grid justify-center gap-3">
              <div className="border-black-100 flex w-fit items-center rounded-full border px-4 py-0.5 text-xs leading-[24px] font-medium capitalize">
                <span className="text-black-500">Classic Monochrome Tees</span>
                <SvgMinus className="text-black-500" />
                <span className="text-black-900">$940 Sales</span>
              </div>
              <div className="border-black-100 flex w-fit items-center rounded-full border px-4 py-0.5 text-xs leading-[24px] font-medium capitalize">
                <span className="text-black-500">Monochromatic Wardrobe</span>
                <SvgMinus className="text-black-500" />
                <span className="text-black-900">$790 Sales</span>
              </div>
              <div className="border-black-100 flex w-fit items-center rounded-full border px-4 py-0.5 text-xs leading-[24px] font-medium capitalize">
                <span className="text-black-500">Essential Neutrals</span>
                <SvgMinus className="text-black-500" />
                <span className="text-black-900"> $740 Sales</span>
              </div>
            </div>
            <div className="px-8 pb-8">
              <DonutChart />
            </div>
          </div>
        </div>

        <div className="bg-white-900 col-span-2 rounded-lg">
          <DashboardRecentOrders />
        </div>
      </div>
    </section>
  );
};
