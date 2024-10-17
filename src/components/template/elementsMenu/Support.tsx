import {
  IconChartCircles,
  IconDownload,
  IconMail,
  IconNotes,
} from "@tabler/icons-react";
import Link from "next/link";

export default function Support() {
  return (
    <div className="flex flex-col pt-6 py-8 pb-0 w-56">
      <h3 className="text-sm text-zinc-400 px-6">SUPPORT</h3>
      <nav className="mt-3">
        <Link href={"/"} className="linkNav flex justify-between">
          <div className="flex items-center justify-center gap-2">
            <IconMail />
            <span>Messages</span>
          </div>
          <span className="spanPro">5</span>
        </Link>
        <Link href={"/"} className="linkNav flex justify-between">
          <div className="flex items-center justify-center gap-2">
            <IconDownload />
            <span>Inbox</span>
          </div>
          <span className="spanPro">Pro</span>
        </Link>
        <Link href={"/"} className="linkNav flex justify-between">
          <div className="flex items-center justify-center gap-2">
            <IconNotes />
            <span>Invoice</span>
          </div>
          <span className="spanPro">Pro</span>
        </Link>
      </nav>
    </div>
  );
}
