import type { JSX } from "react";
import { NavLink, useLocation, type NavLinkProps } from "react-router";
import { twMerge } from "tailwind-merge";

interface IButtonTabProps extends NavLinkProps {
  image: JSX.Element;
  text: string;
  activePaths?: string[];
}

export const ButtonTab = ({
  image,
  text,
  activePaths = [],
  ...props
}: IButtonTabProps) => {
  const location = useLocation();
  const isManuallyActive = activePaths.includes(location.pathname);

  return (
    <NavLink
      {...props}
      className={({ isActive }) => {
        return twMerge(
          `hover:bg-white-100 hover:text-black-900 flex w-[212px] cursor-pointer gap-2.5 rounded-lg px-6 py-2 transition-colors ease-in`,
          isActive || isManuallyActive ? "bg-white-100 text-black-900" : null,
        );
      }}
    >
      {image}
      <span className="font-medium">{text}</span>
    </NavLink>
  );
};
