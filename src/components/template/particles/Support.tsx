import {
  IconChartCircles,
  IconDownload,
  IconMail,
  IconNotes,
} from "@tabler/icons-react";
import Link from "next/link";

export default function Support() {
  return (
    <div className="flex flex-col py-8 pb-0 w-56">
      <h3 className="text-sm text-zinc-400 px-6">SUPPORT</h3>
      <nav className="mt-3">
        <Link href={"/"} className="linkNav">
          <IconChartCircles />
          <span>Charts</span>
        </Link>
        <Link href={"/"} className="linkNav">
          <IconDownload />
          <span>Inbox</span>
        </Link>
        <Link href={"/"} className="linkNav">
          <IconNotes />
          <span>Invoice</span>
        </Link>
      </nav>
    </div>
  );
}
