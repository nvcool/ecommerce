import type { ComponentProps } from "react";
import { Textarea } from "./Textarea";
import { twMerge } from "tailwind-merge";

interface ITextareaWithLabelProps extends ComponentProps<"textarea"> {
  title: string;
  isError?: boolean;
}

export const TextareaWithLabel = ({
  className,
  title,
  isError,
  ...props
}: ITextareaWithLabelProps) => {
  return (
    <label className={twMerge("grid w-fit", className)}>
      <span className="text-black-600 leading-[175%] font-medium">{title}</span>
      <Textarea {...props} isError={isError} />
    </label>
  );
};
