import { IconChartCircles, IconLayout, IconMail } from "@tabler/icons-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  IconAlignJustified,
  IconCalendar,
  IconClipboardText,
  IconLayoutDashboard,
  IconList,
  IconTable,
  IconUser,
} from "@tabler/icons-react";
import Link from "next/link";

export default function Others() {
  return (
    <div className="flex flex-col py-8 w-56">
      <h3 className="text-sm text-zinc-400 px-6">OTHERS</h3>
      <nav className="mt-3">
        <Link href={"/"} className="linkNav">
          <IconChartCircles />
          <span>Charts</span>
        </Link>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex justify-between gap-2">
                <IconLayout />
                <span>UI Elements</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <Link href={"/"} className="flex justify-between transition-all hover:text-zinc-50">
                eCommerce <span className="spanPro">Pro</span>
              </Link>
              <Link href={"/"} className="flex justify-between transition-all hover:text-zinc-50">
                Analytics 
              </Link>
              <Link href={"/"} className="flex justify-between transition-all hover:text-zinc-50">
                Marketing <span className="spanPro">Pro</span>
              </Link>
              <Link href={"/"} className="flex justify-between transition-all hover:text-zinc-50">
                CRM <span className="spanPro">Pro</span>
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </nav>
    </div>
  );
}
