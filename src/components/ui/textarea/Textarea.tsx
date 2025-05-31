import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
interface ITextareaProps extends ComponentProps<"textarea"> {
  isError?: boolean;
}

export const Textarea = ({ className, isError, ...props }: ITextareaProps) => {
  return (
    <textarea
      {...props}
      className={twMerge(
        `placeholder:text-black-300 h-[108px] w-[290px] resize-none overflow-y-auto rounded-md border px-[15px] py-2.5 transition-colors ease-in outline-none ${isError ? "border-red-900 text-red-900 hover:border-red-200 focus:border-red-200 active:border-red-200" : "border-black-100 text-black-900 hover:border-black-200 active:border-black-200 focus:border-black-200"}`,
        className,
      )}
    />
  );
};
