"use client";

import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { IconChevronDown } from "@tabler/icons-react";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const GraficoPizza: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const totalVisitors = 1000;

  const percentages = [30, 20, 10, 40];

  const dataValues = percentages.map((percentage) =>
    Math.round((percentage / 100) * totalVisitors)
  );

  const data = {
    datasets: [
      {
        label: "Visitors",
        data: dataValues,
        backgroundColor: [
          "rgba(128, 202, 238)",
          "rgba(15, 173, 207)",
          "rgba(60, 80, 224)",
          "rgba(101, 119, 243)",
        ],
        borderWidth: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => {
            const dataset = tooltipItem.chart.data.datasets[tooltipItem.datasetIndex];
            const currentValue = dataset.data[tooltipItem.dataIndex];
            const total = dataset.data.reduce((acc: any, val: any) => acc + val, 0);
            const percentage = ((currentValue / total) * 100).toFixed(2);
            return `${tooltipItem.label}: ${percentage}%`;
          },
        },
      },
    },
    cutout: "65%",
    onClick: (event: any) => {
      const chartInstance = event.chart;
      const activePoints = chartInstance.getElementsAtEventForMode(
        event,
        "nearest",
        { intersect: true },
        true
      );
      if (activePoints.length > 0) {
        const { index } = activePoints[0];
        setSelectedIndex(index);
      }
    },
  };

  const colors = [
    { label: "Desktop", color: "rgba(128, 202, 238, 1)" },
    { label: "Tablet", color: "rgba(101, 119, 243, 1)" },
    { label: "Mobile", color: "rgba(60, 80, 224, 1)" },
    { label: "Unknown", color: "rgba(15, 173, 207, 1)" },
  ];

  return (
    <section className="relative flex flex-col rounded shadow-lg px-8 py-6">
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <div className="flex justify-between w-full mt-4 items-center">
          <p className="mb-2 text-2xl font-bold">Visitors Analytics</p>
          <button className="flex justify-center items-center gap-2 px-4 py-1 border border-slate-300 rounded text-slate-500">
            <span>Monthly</span>
            <IconChevronDown width={16}></IconChevronDown>
          </button>
        </div>
        <div className="w-[310px] h-[310px] flex-grow">
          <Doughnut data={data} options={options} />
          {selectedIndex !== null && (
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold">
              {dataValues[selectedIndex]} visitantes
            </div>
          )}
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-wrap justify-center mt-4 w-full">
            {colors.map((color, index) => {
              const percentage = (
                (data.datasets[0].data[index] /
                  data.datasets[0].data.reduce((acc, val) => acc + val, 0)) *
                100
              ).toFixed(2);

              return (
                <div
                  key={index}
                  className="flex flex-col items-center w-1/2 p-2"
                >
                  <div className="flex items-center w-full justify-center">
                    <div className="flex w-44 items-center justify-start">
                      <div
                        className="w-4 h-4 mr-2"
                        style={{ backgroundColor: color.color }}
                      ></div>
                      <p className="text-center">
                        {color.label} ({percentage}%)
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GraficoPizza;
