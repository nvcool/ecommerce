import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface IInputProps extends ComponentProps<"input"> {
  placeholder?: string;
  type?: string;
  isError?: boolean;
}

export const Input = ({
  className,
  placeholder,
  type,
  isError,
  ...props
}: IInputProps) => {
  return (
    <input
      {...props}
      placeholder={placeholder}
      type={type}
      className={twMerge(
        `placeholder:text-black-300 w-full max-w-[290px] rounded-md border px-[15px] py-2.5 transition-colors ease-in outline-none ${isError ? "border-red-900 text-red-900 hover:border-red-200 focus:border-red-200 active:border-red-200" : "border-black-100 text-black-900 hover:border-black-200 active:border-black-200 focus:border-black-200"}`,
        className,
      )}
    />
  );
};
