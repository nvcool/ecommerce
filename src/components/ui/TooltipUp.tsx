import type { ComponentProps } from "react";
import { SvgTooltipArrow } from "./svg/SvgTooltipArrow";

interface ITooltipUpProps extends ComponentProps<"div"> {
  text: string;
}

export const TooltipUp = ({ text, ...props }: ITooltipUpProps) => {
  return (
    <div
      {...props}
      className="text-white-900 bg-black-900 relative rounded-sm px-2 py-1 text-xs leading-[25px] font-medium capitalize"
    >
      <span> {text}</span>

      <SvgTooltipArrow className="text-black-900 absolute -bottom-1 rotate-180" />
    </div>
  );
};
