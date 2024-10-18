"use client";

import { IconArrowNarrowDown, IconArrowNarrowUp } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export default function Tabelas() {
  const [data, setData] = useState([]);
  const [uniqueVisitors, setUniqueVisitors] = useState(0);
  const [totalPageviews, setTotalPageViews] = useState(0);
  const [bounceRate, setBounceRate] = useState(0);
  const [visitDuration, setVisitDuration] = useState(0);

  useEffect(() => {
    const fechtData = async () => {
      try {
        const response = await fetch("http://localhost:3001/VisitorAnalytics");
        const result = await response.json();
        setData(result);

        calcularUniqueVisitors(result);
        calcularTotalPageViews(result);
        calcularBounceRate(result);
        calcularVisitDuration(result);
      } catch (error) {
        console.error("Erro ao buscar os dados da API", error);
      }
    };

    fechtData();
  }, []);

  const calcularUniqueVisitors = (data: any) => {
    const somarUniqueVisitors = data.reduce(
      (acc: any, item: any) => acc + Number(item.uniqueVisitors),
      0
    );
    setUniqueVisitors(somarUniqueVisitors);
  };

  const calcularTotalPageViews = (data: any) => {
    const somarTotalPageViews = data.reduce(
      (acc: any, item: any) => acc + Number(item.pageViews),
      0
    );
    setTotalPageViews(somarTotalPageViews);
  };

  const calcularBounceRate = (data: any) => {
    const somarBounceRate = data.reduce(
      (acc: any, item: any) => acc + Number(item.bounceRate),
      0
    );
    const mediaBounceRate = somarBounceRate / data.length;
    setBounceRate(mediaBounceRate);
  };

  const calcularVisitDuration = (data: any) => {
    const duracaoTotal = data.reduce(
      (acc: any, item: any) => acc + Number(item.averageDuration),
      0
    );
    const mediaDuracao = duracaoTotal / data.length;
    setVisitDuration(mediaDuracao);
  };

  return (
    <section className="flex flex-row justify-between py-6 rounded-md shadow-md">
      <div className="containerDados">
        <div className="flex flex-col px-10">
          <div className="flex justify-start gap-4 items-center">
            <span className="text-2xl">{uniqueVisitors.toLocaleString()}K</span>
            <span className="text-sm text-green-500 flex items-center">
              <IconArrowNarrowUp width={18} />
              <span className="font-normal">18%</span>
            </span>
          </div>
          <span className="text-xs text-slate-500">Unique Visitors</span>
        </div>
      </div>

      <div className="containerDados">
        <div className="flex flex-col px-10">
          <div className="flex justify-start gap-4 items-center">
            <span className="text-2xl">{totalPageviews.toLocaleString()}K</span>
            <span className="text-sm text-green-500 flex items-center">
              <IconArrowNarrowUp width={18} />
              <span className="font-normal">25%</span>
            </span>
          </div>
          <span className="text-xs text-slate-500">Total Pageviews</span>
        </div>
      </div>

      <div className="containerDados">
        <div className="flex flex-col px-10">
          <div className="flex justify-start gap-4 items-center">
            <span className="text-2xl">{bounceRate.toFixed(2)}%</span>
            <span className="text-sm text-green-500 flex items-center">
              <IconArrowNarrowDown width={18} />
              <span className="font-normal">7%</span>
            </span>
          </div>
          <span className="text-xs text-slate-500">Bounce Rate</span>
        </div>
      </div>

      <div className="containerDados border-r-0">
        <div className="flex flex-col px-10">
          <div className="flex justify-start gap-4 items-center">
            <span className="text-2xl">{visitDuration.toLocaleString()}</span>
            <span className="text-sm text-green-500 flex items-center">
              <IconArrowNarrowUp width={18} />
              <span className="font-normal">12%</span>
            </span>
          </div>
          <span className="text-xs text-slate-500">Visit Duration</span>
        </div>
      </div>
    </section>
  );
}
