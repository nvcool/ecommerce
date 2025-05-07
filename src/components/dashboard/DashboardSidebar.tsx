import logo from "../../assets/logo.svg";
import { SvgProduct } from "../../assets/SvgProduct";
import { SvgDashboard } from "../../assets/SvgDashboard";
import { SvgCart } from "../../assets/SvgCart";
import { SvgUsers } from "../../assets/SvgUsers";
import { SvgEmptyStar } from "../../assets/SvgEmptyStar";
import { SvgSettings } from "../../assets/SvgSettings";
import { SvgAdd } from "../../assets/SvgAdd";

const navigate = [
  { image: <SvgDashboard />, label: "Dashboard" },
  { image: <SvgProduct />, label: "Products" },
  { image: <SvgCart />, label: "Orders" },
  { image: <SvgUsers />, label: "Customers" },
  { image: <SvgEmptyStar />, label: "Reviews" },
  { image: <SvgSettings />, label: "Settings" },
];

export const DashboardSidebar = () => {
  return (
    <div className="bg-white-900 text-black-500 h-screen w-[260px]">
      <div className="mb-12 flex items-center justify-center gap-3 py-4">
        <img className="text-black-500" src={logo} alt="" />
        <h1 className="text-black-900 text-xl font-extrabold">Admin</h1>
      </div>
      <ul className="mx-auto mb-8 w-[212px] pb-[46px]">
        <li className="grid gap-4 font-medium">
          {navigate.map((item) => (
            <button
              key={item.label}
              className="hover:bg-white-100 hover:text-black-900 flex cursor-pointer gap-2.5 rounded-lg px-6 py-2 transition-colors ease-in"
            >
              {item.image}
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </li>
      </ul>
      <div className="border-white-200 flex justify-center border-t pt-8">
        <button className="hover:bg-white-100 hover:text-black-900 flex w-[212px] cursor-pointer gap-2.5 rounded-lg px-6 py-2 transition-colors ease-in">
          <SvgAdd />
          <span className="font-medium">Extras</span>
        </button>
      </div>
    </div>
  );
};
