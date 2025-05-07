import { NavLink } from "react-router";
const links = [
  { label: "Home", link: "/" },
  { label: "Dashboard", link: "dashboard" },
];

export const Header = () => {
  return (
    <div className="">
      <div className="bg-black-900 text-white-900 bg bg text-primary-B500 flex gap-[8.5px] justify-center py-2">
        <span> Get 25% OFF on your first order.</span>
        <span>Order Now</span>
      </div>
      <nav>
        <ul>
          <li className="flex gap-10 justify-center ">
            {links.map((link) => (
              <NavLink key={link.link} to={link.link}>
                {link.label}
              </NavLink>
            ))}
          </li>
        </ul>
      </nav>
    </div>
  );
};
