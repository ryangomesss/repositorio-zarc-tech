import {
  IconBell,
  IconChevronDown,
  IconMessageCircle,
  IconSearch,
  IconSun,
} from "@tabler/icons-react";
import Image from "next/image";
import UserKaynnandeson from "@/images/kaynnandeson.jpg";

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full px-10 py-2 bg-white">
      <div className="flex items-center gap-3">
        <IconSearch width={14} className="text-zinc-700" />
        <input
          type="text"
          placeholder="Type to search..."
          className="px-1 outline-none text-xs placeholder:text-xs placeholder:text-zinc-700"
        />
      </div>

      <div className="flex items-center gap-3">
        <div className="bg-zinc-200 flex items-center justify-start p-[4px] rounded-[16px] h-8 w-16">
          <button className="bg-white flex items-center justify-center p-[1px] rounded-full h-6 w-6">
            <IconSun width={16} className="text-zinc-600" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center justify-center bg-zinc-200 h-8 w-8 p-1 rounded-full">
            <IconBell stroke={1.5} width={20} className="text-zinc-600" />
          </button>
          <button className="flex items-center justify-center relative bg-zinc-200 h-8 w-8 p-1 rounded-full">
            <IconMessageCircle
              stroke={1.5}
              width={20}
              className="text-zinc-600"
            />
            <span className="h-2 w-2 absolute rounded-full top-[1px] right-[2px] bg-red-500"></span>
          </button>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-col justify-end text-xs">
            <span className="font-bold">Kaynnandeson</span>
            <span>Web Developer</span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={UserKaynnandeson}
              width={45}
              height={45}
              alt="userImage"
              className="rounded-full"
            />
            <button>
              <IconChevronDown className="text-zinc-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
