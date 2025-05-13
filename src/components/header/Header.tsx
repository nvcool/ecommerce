import { NavLink } from "react-router";
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
