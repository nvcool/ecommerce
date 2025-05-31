import type { ComponentProps } from "react";

export const SvgChevronLeft = (props: ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="6"
      height="12"
      viewBox="0 0 6 12"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.188322 6.53269C-0.060948 6.25565 -0.0630279 5.80422 0.183674 5.52429L5.05141 0L5.95396 1.00331L1.53277 6.02065L6 10.9863L5.10679 12L0.188322 6.53269Z"
        fill="CurrentColor"
      />
    </svg>
  );
};
