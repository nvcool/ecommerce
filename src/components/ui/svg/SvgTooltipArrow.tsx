import type { ComponentProps } from "react";

export const SvgTooltipArrow = (props: ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
    >
      <path
        d="M4.34535 0.566947C4.72112 0.241519 5.27888 0.241519 5.65465 0.566947L9.0346 3.49407C9.73451 4.1002 9.30584 5.25 8.37995 5.25H1.62005C0.694162 5.25 0.265491 4.10021 0.965394 3.49407L4.34535 0.566947Z"
        fill="CurrentColor"
      />
    </svg>
  );
};
