import Menu from "./elementsMenu/Menu";
import Support from "./elementsMenu/Support";
import Image from "next/image";
import LogoTailAdmin from "@/images/logoTailAdmin.png";
import Others from "./elementsMenu/Others";

export default function Navbar() {
  return (
    <div className="flex flex-col items-center bg-slate-900 pt-10 px-8 h-screen scrollbarNav overflow-x-hidden overflow-y-auto">
      <Image src={LogoTailAdmin} width={200} height={60} alt="Logo" />
      <Menu />
      <Support />
      <Others />
    </div>
  );
}
