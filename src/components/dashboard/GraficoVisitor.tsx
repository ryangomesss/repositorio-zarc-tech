"use client";

import { useTheme } from "@/components/theme/ThemeContext";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { useEffect, useState } from "react";

import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ReferenceLine,
} from "recharts";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#3c50e0",
  },
} satisfies ChartConfig;

export default function GraficoVisitor() {
  const { isDarkMode } = useTheme();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/VisitorAnalytics");
        const result = await response.json();

        const formattedData = result.map((item: any, index: number) => ({
          day: index + 1,
          desktop: Number(item.totalVisitors),
        }));


        setData(formattedData);
      } catch (error) {
        console.error("Erro ao buscar os dados da API", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="grafico-container w-full rounded-md shadow-md flex flex-col items-center justify-center">
      <div className="w-full p-3 flex items-center">
        <p className="p-3 ml-[40px] font-bold text-2xl">Visitors Analytics</p>
      </div>
      <ChartContainer config={chartConfig} className="h-[200px] w-full p-3">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid
            vertical={false}
            horizontal={true}
            strokeDasharray="4 4"
            stroke={isDarkMode ? "rgb(255 255 255)" : "rgb(0 0 255)"}
            strokeWidth={0.2}
          />

          <XAxis
            dataKey="day"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />

          <YAxis
            tickLine={false}
            axisLine={false}
            ticks={[0, 100, 200, 300, 400, 500]}
            domain={[0, 500]}
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
