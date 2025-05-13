import type { ComponentProps } from "react";

export const SvgEmptyStar = (props: ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M8 1.5L10.163 5.77865L15 6.46898L11.5 9.79758L12.326 14.5L8 12.2787L3.674 14.5L4.5 9.79758L1 6.46898L5.837 5.77865L8 1.5Z"
        stroke="CurrentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
