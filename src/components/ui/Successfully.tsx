import type { ComponentProps } from "react";
import { SvgCheck } from "./svg/SvgCheck";
import { SvgClose } from "./svg/SvgClose";

interface ISuccessfullyProps extends ComponentProps<"div"> {
  text: string;
}

export const Successfully = ({ text, ...props }: ISuccessfullyProps) => {
  return (
    <div
      {...props}
      className="flex w-fit items-center gap-6 rounded-sm bg-green-100 px-4 py-2"
    >
      <SvgCheck className="text-green-900" />
      <span className="leading-[175%] font-medium text-green-900">{text}</span>
      <button className="text-black-500 hover:text-black-400 cursor-pointer transition-colors ease-in">
        <SvgClose />
      </button>
    </div>
  );
};
