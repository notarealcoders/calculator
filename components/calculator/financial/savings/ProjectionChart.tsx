'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface DataPoint {
  year: number;
  balance: number;
  contributions: number;
  interest: number;
}

interface ProjectionChartProps {
  data: DataPoint[];
}

export function ProjectionChart({ data }: ProjectionChartProps) {
  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
          />
          <Tooltip
            formatter={(value: number) => [`$${value.toFixed(2)}`, '']}
            labelFormatter={(label) => `Year ${label}`}
          />
          <Line
            type="monotone"
            dataKey="balance"
            stroke="hsl(var(--chart-1))"
            name="Total Balance"
          />
          <Line
            type="monotone"
            dataKey="contributions"
            stroke="hsl(var(--chart-2))"
            name="Total Contributions"
          />
          <Line
            type="monotone"
            dataKey="interest"
            stroke="hsl(var(--chart-3))"
            name="Total Interest"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}