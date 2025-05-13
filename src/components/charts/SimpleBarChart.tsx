import { BarChart, Bar, Tooltip, ResponsiveContainer, YAxis } from "recharts";
import { CustomChartTooltip } from "./CustomChartTooltip";

const data = [
  { name: "1", value: 270 },
  { name: "2", value: 420 },
  { name: "3", value: 370 },
  { name: "4", value: 460 },
  { name: "5", value: 400 },
  { name: "6", value: 320 },
  { name: "7", value: 140 },
  { name: "8", value: 400 },
  { name: "9", value: 370 },
  { name: "10", value: 250 },
  { name: "11", value: 140 },
  { name: "12", value: 230 },
  { name: "13", value: 320 },
  { name: "14", value: 420 },
  { name: "15", value: 460 },
  { name: "16", value: 400 },
  { name: "17", value: 320 },
  { name: "18", value: 460 },
  { name: "19", value: 320 },
  { name: "20", value: 370 },
  { name: "21", value: 420 },
  { name: "22", value: 290 },
  { name: "23", value: 400 },
  { name: "24", value: 370 },
  { name: "25", value: 290 },
  { name: "26", value: 370 },
  { name: "27", value: 200 },
  { name: "28", value: 290 },
];

export const SimpleBarChart = () => (
  <ResponsiveContainer width="100%" height={46}>
    <BarChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
      <YAxis domain={[0, "dataMax"]} hide />
      <Tooltip content={<CustomChartTooltip text="$" />} />
      <Bar
        className="cursor-pointer"
        dataKey="value"
        fill="#4078FF"
        barSize={4}
      />
    </BarChart>
  </ResponsiveContainer>
);
