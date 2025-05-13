import { LineChart, Line, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { CustomChartTooltip } from "./CustomChartTooltip";

// Данные для графика, можно извлечь их из твоего SVG пути, если нужно
const data = [
  { x: 1, y: 0 },
  { x: 10, y: 50 },
  { x: 19, y: 90 },
  { x: 28, y: 10 },
  { x: 37, y: 200 },
  { x: 46, y: 50 },
  { x: 55, y: 45 },
  { x: 64, y: 280 },
  { x: 74, y: 500 },
  { x: 83, y: 29 },
  { x: 92, y: 10 },
  { x: 101, y: 230 },
  { x: 110, y: 40 },
  { x: 119, y: 260 },
  { x: 128, y: 160 },
  { x: 137, y: 41 },
  { x: 146, y: 70 },
  { x: 155, y: 35 },
  { x: 164, y: 100 },
  { x: 173, y: 130 },
  { x: 182, y: 300 },
  { x: 191, y: 150 },
  { x: 201, y: 350 },
  { x: 210, y: 380 },
  { x: 219, y: 160 },
  { x: 228, y: 360 },
  { x: 237, y: 280 },
  { x: 246, y: 50 },
  { x: 255, y: 440 },
  { x: 264, y: 0 },
];

export const LineChartComponent = () => (
  <ResponsiveContainer width="100%" height={46}>
    <LineChart data={data}>
      <YAxis domain={[0, "dataMax"]} hide />
      <Tooltip content={<CustomChartTooltip text="users" />} />
      <Line
        type="monotone"
        dataKey="y"
        stroke="#4078FF"
        strokeWidth={2}
        dot={false} // Убираем точки на линии, если они не нужны
      />
    </LineChart>
  </ResponsiveContainer>
);
