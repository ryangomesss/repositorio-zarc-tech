import { IconChartCircles, IconDoor, IconLayout,  } from "@tabler/icons-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function Others() {
  return (
    <div className="flex flex-col pt-6 py-8 w-56">
      <h3 className="text-sm text-zinc-400 px-6">OTHERS</h3>
      <nav className="mt-3">
        <Link href={"/"} className="linkNav">
          <IconChartCircles />
          <span>Chart</span>
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
              <Link
                href={"/"}
                className="flex justify-between transition-all hover:text-zinc-50"
              >
                Alearts
              </Link>
              <Link
                href={"/"}
                className="flex justify-between transition-all hover:text-zinc-50"
              >
                Buttons
              </Link>
              <Link
                href={"/"}
                className="flex justify-between transition-all hover:text-zinc-50"
              >
                Buttons Group <span className="spanPro">Pro</span>
              </Link>
              <Link
                href={"/"}
                className="flex justify-between transition-all hover:text-zinc-50"
              >
                Badge <span className="spanPro">Pro</span>
              </Link>
              <Link
                href={"/"}
                className="flex justify-between transition-all hover:text-zinc-50"
              >
                Breadcrumb <span className="spanPro">Pro</span>
              </Link>
              <Link
                href={"/"}
                className="flex justify-between transition-all hover:text-zinc-50"
              >
                Cards <span className="spanPro">Pro</span>
              </Link>
              <Link
                href={"/"}
                className="flex justify-between transition-all hover:text-zinc-50"
              >
                Dropdowns <span className="spanPro">Pro</span>
              </Link>
              <Link
                href={"/"}
                className="flex justify-between transition-all hover:text-zinc-50"
              >
                Modals <span className="spanPro">Pro</span>
              </Link>
              <Link
                href={"/"}
                className="flex justify-between transition-all hover:text-zinc-50"
              >
                Tabs <span className="spanPro">Pro</span>
              </Link>
              <Link
                href={"/"}
                className="flex justify-between transition-all hover:text-zinc-50"
              >
                Tooltips <span className="spanPro">Pro</span>
              </Link>
              <Link
                href={"/"}
                className="flex justify-between transition-all hover:text-zinc-50"
              >
                Popovers <span className="spanPro">Pro</span>
              </Link>
              <Link
                href={"/"}
                className="flex justify-between transition-all hover:text-zinc-50"
              >
                Accordion <span className="spanPro">Pro</span>
              </Link>
              <Link
                href={"/"}
                className="flex justify-between transition-all hover:text-zinc-50"
              >
                Notifications <span className="spanPro">Pro</span>
              </Link>
              <Link
                href={"/"}
                className="flex justify-between transition-all hover:text-zinc-50"
              >
                Pagination <span className="spanPro">Pro</span>
              </Link>
              <Link
                href={"/"}
                className="flex justify-between transition-all hover:text-zinc-50"
              >
                Progress <span className="spanPro">Pro</span>
              </Link>
              <Link
                href={"/"}
                className="flex justify-between transition-all hover:text-zinc-50"
              >
                Carousel <span className="spanPro">Pro</span>
              </Link>
              <Link
                href={"/"}
                className="flex justify-between transition-all hover:text-zinc-50"
              >
                Images <span className="spanPro">Pro</span>
              </Link>
              <Link
                href={"/"}
                className="flex justify-between transition-all hover:text-zinc-50"
              >
                Videos <span className="spanPro">Pro</span>
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex justify-between gap-2">
                <IconDoor />
                <span>Authentication</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <Link
                href={"/"}
                className="flex justify-between transition-all hover:text-zinc-50"
              >
                Sign In
              </Link>
              <Link
                href={"/"}
                className="flex justify-between transition-all hover:text-zinc-50"
              >
                Sign Up
              </Link>
              <Link
                href={"/"}
                className="flex justify-between transition-all hover:text-zinc-50"
              >
                Reset Password <span className="spanPro">Pro</span>
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </nav>
    </div>
  );
}
