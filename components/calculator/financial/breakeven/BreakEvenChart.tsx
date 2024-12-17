'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface BreakEvenChartProps {
  breakEvenUnits: number;
  fixedCosts: number;
  pricePerUnit: number;
  costPerUnit: number;
}

export function BreakEvenChart({
  breakEvenUnits,
  fixedCosts,
  pricePerUnit,
  costPerUnit,
}: BreakEvenChartProps) {
  const generateChartData = () => {
    const maxUnits = Math.ceil(breakEvenUnits * 2);
    const step = Math.ceil(maxUnits / 10);
    const data = [];

    for (let units = 0; units <= maxUnits; units += step) {
      const revenue = units * pricePerUnit;
      const totalCosts = fixedCosts + (units * costPerUnit);
      data.push({
        units,
        revenue,
        totalCosts,
        profit: revenue - totalCosts,
      });
    }

    return data;
  };

  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer>
        <LineChart data={generateChartData()} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="units" label={{ value: 'Units', position: 'insideBottom', offset: -5 }} />
          <YAxis label={{ value: 'Amount ($)', angle: -90, position: 'insideLeft' }} />
          <Tooltip
            formatter={(value: number) => [`$${value.toFixed(2)}`, '']}
            labelFormatter={(label) => `Units: ${label}`}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="hsl(var(--chart-1))"
            name="Revenue"
          />
          <Line
            type="monotone"
            dataKey="totalCosts"
            stroke="hsl(var(--chart-2))"
            name="Total Costs"
          />
          <Line
            type="monotone"
            dataKey="profit"
            stroke="hsl(var(--chart-3))"
            name="Profit"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}