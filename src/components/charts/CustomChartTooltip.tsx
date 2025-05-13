import type { TooltipProps } from "recharts";
import { TooltipUp } from "../ui/TooltipUp";

interface ICustomChartTooltip extends TooltipProps<number, string> {
  text: string;
}

export const CustomChartTooltip = ({
  active,
  payload,
  text,
}: ICustomChartTooltip) => {
  if (!active || !payload?.length) return null;

  const value = payload[0].value;

  return <TooltipUp text={`${text}: ${value}`} />;
};
