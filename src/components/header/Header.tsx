import { NavLink } from "react-router";
import { SvgLogoHeader } from "../ui/svg/SvgLogoHeader";
const links = [
  { label: "Home", link: "/" },
  { label: "Admin", link: "admin/dashboard" },
];

export const Header = () => {
  return (
    <header className="">
      <div className="bg-black-900 text-white-900 bg bg text-primary-B500 flex justify-center gap-[8.5px] py-2">
        <span> Get 25% OFF on your first order.</span>
        <span>Order Now</span>
      </div>
      <nav>
        <div className="flex items-center justify-center gap-3">
          <SvgLogoHeader className="bg-black-900 text-white-900 flex h-10 w-10 rounded-full px-[7px] py-[6px]" />
          <span className="text-black-900 -leading-[0.7px] text- font-bold">
            Ecommerce
          </span>
        </div>
        <ul>
          <li className="flex justify-center gap-10">
            {links.map((link) => (
              <NavLink key={link.link} to={link.link}>
                {link.label}
              </NavLink>
            ))}
          </li>
        </ul>
      </nav>
    </header>
  );
};
