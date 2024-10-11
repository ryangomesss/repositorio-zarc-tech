import Tabelas from "@/components/DiagramaGrafico";
import GraficoVisitor from "@/components/GraficoVisitor";
import TopContent from "@/components/TopContent";
import TopChannels from "@/components/TopChannels";
import ImagemMapa from "@/components/MapaImg";
import GraficoPizza from "@/components/GraficoVisitor2";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 gap-8">
      <GraficoVisitor></GraficoVisitor>
      <Tabelas></Tabelas>
      <div className="flex gap-4">
        <div className="w-2/3">
          <ImagemMapa></ImagemMapa>
        </div>
        <div className="flex flex-col w-3/5">
          <TopContent></TopContent>
          <TopChannels></TopChannels>
          <GraficoPizza></GraficoPizza>
        </div>
      </div>

    </div>
  );
}
