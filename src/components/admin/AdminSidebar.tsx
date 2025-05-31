import logo from "../../assets/logo.svg";
import { SvgProduct } from "../ui/svg/SvgProduct";
import { SvgDashboard } from "../ui/svg/SvgDashboard";
import { SvgCart } from "../ui/svg/SvgCart";
import { SvgUsers } from "../ui/svg/SvgUsers";
import { SvgEmptyStar } from "../ui/svg/SvgEmptyStar";
import { SvgSettings } from "../ui/svg/SvgSettings";
import { SvgAdd } from "../ui/svg/SvgAdd";
import { ButtonTab } from "../ui/ButtonTab";
import { Link } from "react-router";

const navigate = [
  {
    image: <SvgDashboard />,
    label: "Dashboard",
    link: "/admin/dashboard",
    activePaths: ["/admin/dashboard"],
  },
  {
    image: <SvgProduct />,
    label: "Products",
    link: "/admin/products",
    activePaths: ["/admin/products", "/admin/add-product"],
  },
  {
    image: <SvgCart />,
    label: "Orders",
    link: "/admin/orders",
    activePaths: ["/admin/orders"],
  },
  {
    image: <SvgUsers />,
    label: "Customers",
    link: "/admin/customers",
    activePaths: ["/admin/customers"],
  },
  {
    image: <SvgEmptyStar />,
    label: "Reviews",
    link: "/admin/reviews",
    activePaths: ["/admin/reviews"],
  },
  {
    image: <SvgSettings />,
    label: "Settings",
    link: "/admin/settings",
    activePaths: ["/admin/settings"],
  },
];

export const AdminSidebar = () => {
  return (
    <div className="bg-white-900 text-black-500 sticky top-0 h-screen">
      <Link
        to={"/"}
        className="mb-12 flex items-center justify-center gap-3 py-4"
      >
        <img className="text-black-500" src={logo} alt="" />
        <h1 className="text-black-900 text-xl font-extrabold">Admin</h1>
      </Link>
      <ul className="mb-8 flex justify-center pb-[46px]">
        <li className="grid gap-4 font-medium">
          {navigate.map((item) => (
            // <button
            //   key={item.label}
            //   className="hover:bg-white-100 hover:text-black-900 flex cursor-pointer gap-2.5 rounded-lg px-6 py-2 transition-colors ease-in"
            // >
            //   {item.image}
            //   <span className="font-medium">{item.label}</span>
            // </button>
            <ButtonTab
              key={item.label}
              to={item.link}
              image={item.image}
              text={item.label}
              activePaths={item.activePaths}
            />
          ))}
        </li>
      </ul>
      <div className="border-white-200 grid justify-center border-t pt-8">
        <ButtonTab to={"/"} image={<SvgAdd />} text="Extras" />
      </div>
    </div>
  );
};
