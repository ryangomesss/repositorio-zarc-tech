"use client";

import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { IconChevronDown } from "@tabler/icons-react";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const GraficoPizza: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [dataValues, setDataValues] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const apiUrl = "http://localhost:3001/VisitorsAnalytics";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();

        const values = result.map((item: any) => parseInt(Object.values(item)[1]));
        const labels = result.map((item: any) => Object.keys(item)[1]);

        setDataValues(values);
        setLabels(labels);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Visitantes",
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
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => {
            const dataset = tooltipItem.chart.data.datasets[tooltipItem.datasetIndex];
            const currentValue = dataset.data[tooltipItem.dataIndex];
            const total = dataset.data.reduce((acc: number, val: number) => acc + val, 0);
            const percentage = ((currentValue / total) * 100).toFixed(2);
            return `${tooltipItem.label}: ${percentage}%`;
          },
        },
      },
    },
    cutout: "65%",
    onClick: (event: any) => {
      const chartInstance = event.chart;
      const activePoints = chartInstance.getElementsAtEventForMode(event, "nearest", { intersect: true }, true);
      if (activePoints.length > 0) {
        const { index } = activePoints[0];
        setSelectedIndex(index);
      }
    },
    elements: {
      arc: {
        hover: {
          scale: 1.1,
          borderWidth: 1.5,
        },
      },
    },
  };

  
  return (
    <section className="relative flex flex-col rounded shadow-lg px-8 py-6">
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <div className="flex justify-between w-full items-center">
          <p className="mb-2 text-2xl font-bold">Visitors Analytics</p>
          <button className="flex justify-center items-center gap-2 px-4 py-1 border border-slate-300 rounded text-slate-500">
            <span>Monthly</span>
            <IconChevronDown width={16}></IconChevronDown>
          </button>
        </div>
        <div className="w-[295px] h-[295px] flex-grow mt-16">
          <Doughnut data={data} options={options} />
          {selectedIndex !== null && (
            <div className="flex flex-col justify-center items-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold">
              <span className="font-semibold text-3xl">
                {dataValues[selectedIndex]}
              </span>{" "}
              <span className="font-light text-sm">Visitors</span>
            </div>
          )}
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-wrap justify-center mt-4 w-full">
            {dataValues.map((value, index) => {
              const percentage = ((value / dataValues.reduce((acc, val) => acc + val, 0)) * 100).toFixed(2);
              return (
                <div key={index} className="flex flex-col items-center w-1/2 p-2">
                  <div className="flex items-center w-full justify-center">
                    <div className="flex w-44 items-center justify-start">
                      <div className="w-4 h-4 mr-2" style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}></div>
                      <p className="text-center">
                        {labels[index]} ({percentage}%)
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
