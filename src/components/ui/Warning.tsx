import type { ComponentProps } from "react";
import { SvgClose } from "./svg/SvgClose";
import { SvgWarning } from "./svg/SvgWarning";

interface IWarningProps extends ComponentProps<"div"> {
  text: string;
}

export const Warning = ({ text }: IWarningProps) => {
  return (
    <div className="flex w-fit items-center gap-6 rounded-sm bg-red-100 px-4 py-2">
      <SvgWarning className="text-red-900" />
      <span className="leading-[175%] font-medium text-red-900">{text}</span>
      <button className="text-black-500 hover:text-black-400 cursor-pointer transition-colors ease-in">
        <SvgClose />
      </button>
    </div>
  );
};
