import type { ComponentProps } from "react";
import { SvgChevronRight } from "../ui/svg/SvgChevronRight";
import { SvgLogout } from "../ui/svg/SvgLogout";
import { Link } from "react-router";
import { twMerge } from "tailwind-merge";
import React from "react";

interface IAdminHeaderProps extends ComponentProps<"header"> {
  breadcrumbs: { link?: string; text: string }[];
}

export const AdminHeader = ({
  className,
  breadcrumbs,
  ...props
}: IAdminHeaderProps) => {
  return (
    <header
      {...props}
      className={twMerge(
        `text-black-500 mb-14 flex items-center justify-between py-[22px] font-medium`,
        className,
      )}
    >
      <div className="flex items-center gap-1 px-3">
        {breadcrumbs.map((item, index) => (
          <React.Fragment key={item.text}>
            {item.link ? (
              <Link
                to={item.link}
                className="hover:text-black-900 cursor-pointer transition-colors ease-in"
              >
                {item.text}
              </Link>
            ) : (
              <>
                <span className="text-black-900">{item.text}</span>
              </>
            )}
            {breadcrumbs.length !== index + 1 && (
              <SvgChevronRight className="m-1.5" />
            )}
          </React.Fragment>
        ))}
      </div>
      <button className="hover:text-black-900 cursor-pointer transition-colors ease-in">
        <SvgLogout />
      </button>
    </header>
  );
};
