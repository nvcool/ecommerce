import { type ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type ButtonVariant = "filled" | "outlined" | "transparent";

interface IButtonProps extends ComponentProps<"button"> {
  variant?: ButtonVariant;
}

const buttonVariants: Record<ButtonVariant, string> = {
  filled:
    "bg-black-900 text-white-900 hover:bg-black-800 focus:bg-black-800 disabled:bg-black-200 active:bg-black-900",
  outlined:
    " border-black-900 hover:border-black-800 hover:text-black-800 focus:border-black-800 focus:text-black-800 active:border-black-900 active:text-black-900 disabled:text-black-500 disabled:border-black-200",
  transparent:
    "bg-transparent focus:text-black-800 hover:text-black-800 disabled:text-black-500",
};

export const Button = ({
  variant = "filled",
  className,
  children,
  ...props
}: IButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge(
        "cursor-pointer rounded-sm border border-transparent px-6 py-[9px] leading-[175%] font-medium transition-colors ease-in disabled:cursor-auto",
        buttonVariants[variant],
        className,
      )}
    >
      {children}
    </button>
  );
};
