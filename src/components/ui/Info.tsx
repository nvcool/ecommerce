import type { ComponentProps } from "react";
import { SvgClose } from "./svg/SvgClose";
import { SvgInfo } from "./svg/SvgInfo";

interface IInfoProps extends ComponentProps<"div"> {
  text: string;
}

export const Info = ({ text, ...props }: IInfoProps) => {
  return (
    <div
      {...props}
      className="bg-black-900 flex w-fit items-center gap-6 rounded-sm px-4 py-2"
    >
      <SvgInfo className="text-white-900" />
      <span className="text-white-900 leading-[175%] font-medium">{text}</span>
      <button className="text-black-500 hover:text-black-400 cursor-pointer transition-colors ease-in">
        <SvgClose />
      </button>
    </div>
  );
};
