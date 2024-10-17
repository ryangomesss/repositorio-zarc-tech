import Tabelas from "@/components/dashboard/DiagramaGrafico";
import GraficoVisitor from "@/components/dashboard/GraficoVisitor";
import TopContent from "@/components/dashboard/TopContent";
import TopChannels from "@/components/dashboard/TopChannels";
import TopProducts from "@/components/dashboard/TopProducts";
import ImagemMapa from "@/components/dashboard/MapaImg";
import GraficoPizza from "@/components/dashboard/GraficoPizza";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <GraficoVisitor></GraficoVisitor>
      <Tabelas></Tabelas>
      <div className="flex gap-4">
        <div className="w-2/3">
          <ImagemMapa></ImagemMapa>
        </div>
        <div className="flex flex-col gap-8 w-3/5">
          <TopContent></TopContent>
          <TopChannels></TopChannels>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="w-2/5">
          <GraficoPizza></GraficoPizza>
        </div>
        <div className="w-2/3">
          <TopProducts></TopProducts>
        </div>
      </div>
    </div>
  );
}
