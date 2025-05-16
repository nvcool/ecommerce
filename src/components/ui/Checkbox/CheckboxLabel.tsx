import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface ICheckboxLabelProps extends ComponentProps<"span"> {}

export const CheckboxLabel = ({
  className,
  children,
  ...props
}: ICheckboxLabelProps) => {
  return (
    <span {...props} className={twMerge("text-black-600", className)}>
      {children}
    </span>
  );
};
