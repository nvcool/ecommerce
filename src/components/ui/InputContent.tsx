import type { ComponentProps } from "react";
import { Input } from "./Input";
import { twMerge } from "tailwind-merge";

interface IInputContentProps extends ComponentProps<"label"> {
  title: string;
  placeholder: string;
}

export const InputContent = ({
  title,
  placeholder,
  className,
  ...props
}: IInputContentProps) => {
  return (
    <label {...props} className={twMerge("grid w-fit", className)}>
      <span className="text-black-600 leading-[175%] font-medium">{title}</span>
      <Input placeholder={placeholder} />
    </label>
  );
};
