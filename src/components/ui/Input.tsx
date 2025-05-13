import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface IInputProps extends ComponentProps<"input"> {
  placeholder: string;
}

export const Input = ({ className, placeholder, ...props }: IInputProps) => {
  return (
    <input
      {...props}
      placeholder={placeholder}
      className={twMerge(
        "placeholder:text-black-300 border-black-100 hover:border-black-200 focus:border-black-200 active:border-black-200 w-[290px] rounded-md border px-[15px] py-2.5 transition-colors ease-in outline-none",
        className,
      )}
    />
  );
};
