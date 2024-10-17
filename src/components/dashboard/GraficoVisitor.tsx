"use client";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";

import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ReferenceLine,
} from "recharts";

const chartData = [
  { month: "1", desktop: 386 },
  { month: "2", desktop: 186 },
  { month: "3", desktop: 186 },
  { month: "4", desktop: 286 },
  { month: "5", desktop: 186 },
  { month: "6", desktop: 186 },
  { month: "7", desktop: 186 },
  { month: "8", desktop: 186 },
  { month: "9", desktop: 186 },
  { month: "10", desktop: 186 },
  { month: "11", desktop: 186 },
  { month: "12", desktop: 286 },
  { month: "13", desktop: 186 },
  { month: "14", desktop: 386 },
  { month: "15", desktop: 186 },
  { month: "16", desktop: 186 },
  { month: "17", desktop: 186 },
  { month: "18", desktop: 286 },
  { month: "19", desktop: 186 },
  { month: "20", desktop: 386 },
  { month: "21", desktop: 186 },
  { month: "22", desktop: 286 },
  { month: "23", desktop: 186 },
  { month: "24", desktop: 186 },
  { month: "25", desktop: 186 },
  { month: "26", desktop: 286 },
  { month: "27", desktop: 186 },
  { month: "28", desktop: 186 },
  { month: "29", desktop: 286 },
  { month: "30", desktop: 186 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#3c50e0",
  },
} satisfies ChartConfig;

export default function GraficoVisitor() {
  return (
    <section className="grafico-container w-full rounded-md shadow-md flex flex-col items-center justify-center">
      <div className="w-full p-3 flex items-center">
        <p className="p-3 ml-[40px] font-bold text-2xl">Visitors Analytics</p>
      </div>
      <ChartContainer config={chartConfig} className="h-[200px] w-full p-3">
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid
            vertical={false}
            horizontal={true}
            strokeDasharray="4 4"
            stroke="#0000FF"
            strokeWidth={0.2}
          />

          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />

          <YAxis
            tickLine={false}
            axisLine={false}
            ticks={[0, 100, 200, 300, 400]}
            domain={[0, 400]}
          />

          <ReferenceLine stroke="blue" />

          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar
            dataKey="desktop"
            fill="var(--color-desktop)"
            radius={4}
            label={(props) => (props.value === 186 ? null : props.value)}
            barSize={10}
          />
        </BarChart>
      </ChartContainer>
    </section>
  );
}
