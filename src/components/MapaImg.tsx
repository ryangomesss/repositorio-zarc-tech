import Image from "next/image";
import ImagemDoMapa from "@/images/imagemMapa.png";

export default function ImagemMapa() {
  return (
    <div>
      <Image src={ImagemDoMapa} alt="mapImage"></Image>
    </div>
  );
}
