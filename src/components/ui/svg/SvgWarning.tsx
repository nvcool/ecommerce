import type { ComponentProps } from "react";

export const SvgWarning = (props: ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M10.0959 2.19349C9.99257 2.0062 9.83558 1.84902 9.64222 1.73927C9.44886 1.62952 9.22663 1.57144 9.00001 1.57144C8.77338 1.57144 8.55115 1.62952 8.35779 1.73927C8.16443 1.84902 8.00744 2.0062 7.90412 2.19349L1.13172 14.7707C1.03727 14.9447 0.992295 15.1383 1.00108 15.3331C1.00986 15.5278 1.07211 15.7172 1.18192 15.8833C1.29172 16.0494 1.44543 16.1868 1.62845 16.2821C1.81147 16.3776 2.01772 16.428 2.22762 16.4286H15.7724C15.9823 16.428 16.1886 16.3776 16.3715 16.2821C16.5546 16.1868 16.7083 16.0494 16.8181 15.8833C16.9279 15.7172 16.9902 15.5278 16.9989 15.3331C17.0078 15.1383 16.9627 14.9447 16.8683 14.7707L10.0959 2.19349Z"
        stroke="CurrentColor"
        strokeWidth="1.43"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 6.9592V10.3878"
        stroke="CurrentColor"
        strokeWidth="1.43"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.00011 13.6531C8.81978 13.6531 8.67358 13.5069 8.67358 13.3265C8.67358 13.1462 8.81978 13 9.00011 13"
        stroke="CurrentColor"
        strokeWidth="1.43"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.00012 13.6531C9.18046 13.6531 9.32665 13.5069 9.32665 13.3265C9.32665 13.1462 9.18046 13 9.00012 13"
        stroke="CurrentColor13"
        strokeWidth="1.43"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
