import type { ComponentProps } from "react";

export const SvgProduct = (props: ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="17"
      viewBox="0 0 18 17"
      fill="none"
    >
      <path
        d="M2.23077 6.16667H15.7692M2.23077 6.16667V14.3333C2.23077 14.6427 2.36044 14.9395 2.59125 15.1583C2.82207 15.377 3.13511 15.5 3.46154 15.5H14.5385C14.8649 15.5 15.178 15.377 15.4087 15.1583C15.6395 14.9395 15.7692 14.6427 15.7692 14.3333V6.16667M2.23077 6.16667C1.55103 6.16667 1 5.64433 1 5V2.66667C1 2.02234 1.55103 1.5 2.23077 1.5H15.7692C16.449 1.5 17 2.02234 17 2.66667V5C17 5.64433 16.449 6.16667 15.7692 6.16667M7.15385 9.66667H10.8462"
        stroke="CurrentColor"
        strokeWidth="1.42857"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
