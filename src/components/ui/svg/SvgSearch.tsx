import type { ComponentProps } from "react";

export const SvgSearch = (props: ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M9.2252 16.4799C11.28 16.4799 13.2507 15.6636 14.7036 14.2106C16.1566 12.7577 16.9729 10.787 16.9729 8.73219C16.9729 6.67737 16.1566 4.70672 14.7036 3.25374C13.2507 1.80077 11.28 0.984497 9.2252 0.984497C7.17038 0.984497 5.19973 1.80077 3.74675 3.25374C2.29378 4.70672 1.47751 6.67737 1.47751 8.73219C1.47751 10.787 2.29378 12.7577 3.74675 14.2106C5.19973 15.6636 7.17038 16.4799 9.2252 16.4799Z"
        stroke="CurrentColor"
        strokeWidth="1.44"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.5225 19.0155L14.5782 15.0712"
        stroke="CurrentColor"
        strokeWidth="1.44"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
