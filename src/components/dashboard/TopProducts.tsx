"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import produto1 from "@/images/product-01.svg";
import produto2 from "@/images/product-02.svg";
import produto3 from "@/images/product-03.svg";
import produto4 from "@/images/product-04.svg";

export default function TopProducts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/TopProducts");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Erro ao buscar os dados da API", error);
      }
    };

    fetchData();
  }, []);

  const formatarNumero = (numero: number) => {
    if (numero >= 1000) {
      return (numero / 1000).toFixed(1) + "K";
    } else {
      return numero;
    }
  };

  return (
    <section className="flex flex-1 flex-col shadow-lg rounded p-6 pb-12">
      <h2 className="text-2xl font-bold mb-4">Top Products</h2>
      <table className="min-w-full text-left table-auto">
        <thead>
          <tr>
            <th className="text-slate-500 font-normal px-4 py-4 border-t">
              Product Name
            </th>
            <th className="text-slate-500 font-normal px-4 py-4 border-t">
              Category
            </th>
            <th className="text-slate-500 font-normal px-4 py-4 border-t">
              Price
            </th>
            <th className="text-slate-500 font-normal px-4 py-4 border-t">
              Sold
            </th>
            <th className="text-slate-500 font-normal px-4 py-4 border-t">
              Profit
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: any, index: number) => (
            <tr className="font-semibold py-11" key={index}>
              <td className="flex items-center gap-4 px-4 py-4 border-t">
                <Image width={60} height={50} alt="productImage" src={item.productImage}></Image>
                {item.productName}
              </td>
              <td className="px-4 py-4 border-t">{item.category}</td>
              <td className="px-4 py-4 border-t">{item.price}</td>
              <td className="px-4 py-4 border-t">{item.sold}</td>
              <td className="px-4 py-4 border-t text-green-500">
                {item.profit}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
