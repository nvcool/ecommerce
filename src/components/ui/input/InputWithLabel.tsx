import type { ComponentProps } from "react";
import { Input } from "./Input";
import { twMerge } from "tailwind-merge";

interface IInputWithLabelProps extends ComponentProps<"input"> {
  title: string;
  isError?: boolean;
}

export const InputWithLabel = ({
  title,
  className,
  isError,
  ...props
}: IInputWithLabelProps) => {
  return (
    <label className={twMerge("grid", className)}>
      <span className="text-black-600 leading-[175%] font-medium">{title}</span>
      <Input {...props} isError={isError} />
    </label>
  );
};
