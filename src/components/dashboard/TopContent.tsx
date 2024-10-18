"use client";

import { useEffect, useState } from "react";
import { useTheme } from "../theme/ThemeContext";

export default function TopContent() {
  const { isDarkMode } = useTheme();

  const [data, setData] = useState([]);
  const [maximoVisualizacoes, setMaximoVisualizacoes] = useState(0);

  const formatarNumero = (numero: number) => {
    if (numero >= 1000) {
      return (numero / 1000).toFixed(1) + "K";
    } else {
      return numero;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/TopContent");
        const result = await response.json();
        setData(result);

        const maxViews = Math.max(...result.map((item: any) => item.views));
        setMaximoVisualizacoes(maxViews);
      } catch (error) {
        console.error("Erro ao buscar os dados da API", error);
      }
    };

    fetchData();
  }, []); 

  return (
    <section className="flex flex-1 flex-col shadow-lg rounded p-8">
      <h2 className="text-2xl font-bold mb-4">Top Content</h2>
      <table className="flex flex-col min-w-full text-left table-auto">
        <thead>
          <tr className="flex justify-between">
            <th className="tituloTabelaTopCC w-full">
              URL
            </th>
            <th className="tituloTabelaTopCC w-1/5 text-center">Views</th>
            <th className="tituloTabelaTopCC w-1/5 text-center">Uniques</th>
          </tr>
        </thead>
        <tbody className="flex flex-1 flex-col gap-4">
          {data.map((item: any, index: number) => {
            const percentage = (item.views / maximoVisualizacoes) * 100;

            return (
              <tr
                key={index}
                className="flex justify-between font-semibold"
                style={{
                  background: `linear-gradient(to right, ${
                    isDarkMode ? "rgb(30 41 59)" : "rgb(226 232 240)"
                  } ${index === 0 ? 84 : percentage}%, transparent 0%)`,
                }}
              >
                <td className="py-2 w-full">
                  <span className="ml-4">{item.url}</span>
                </td>
                <td className="text-center py-2 w-1/5">
                  {formatarNumero(item.views)}
                </td>
                <td className="text-center py-2 w-1/5">
                  {formatarNumero(item.uniques)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
