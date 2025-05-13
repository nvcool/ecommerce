import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Segment A", value: 3 },
  { name: "Segment B", value: 4 },
  { name: "Segment C", value: 5 },
];

const COLORS = ["#4078FF", "#A8B2FF", "#728FFF"];

export const DonutChart = () => {
  return (
    <PieChart width={96} height={96}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={38}
        outerRadius={48}
        paddingAngle={1}
        dataKey="value"
        stroke="#fff"
        strokeWidth={2}
      >
        {data.map((_, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index]} />
        ))}
      </Pie>
    </PieChart>
  );
};
