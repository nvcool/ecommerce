import type { ComponentProps } from "react";

export const SvgSort = (props: ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
    >
      <path
        d="M1 3.3087L3.37549 1.00035M3.37549 1.00035L5.75246 3.30726M3.37549 1.00035L3.37935 13M13 10.692L10.6238 12.9997M10.6238 12.9997L8.24754 10.692M10.6238 12.9997V1"
        stroke="#474B57"
        strokeWidth="1.14286"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
