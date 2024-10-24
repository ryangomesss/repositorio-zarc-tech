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

export default function Menu() {
  
  const router = useRouter();

  const handleLinkClick = (label) => {
    console.log(`Link clicado: ${label}`);
    router.push('/');
  };

  
  };
  return (
    <div className="flex flex-col pt-8 w-56">
      <h3 className="text-sm text-zinc-400 px-6">MENU</h3>
      <nav className="mt-3">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex justify-between gap-2">
                <IconLayoutDashboard />
                <span>Dashboard</span>
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
        <Link href={"/"} className="linkNav">
          <IconCalendar />
          <span>Calendar</span>
        </Link>
        <Link href={"/"} className="linkNav">
          <IconUser />
          <span>Profile</span>
        </Link>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <div className="flex justify-between gap-2">
                <IconList />
                <span>Task</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <Link
                href={"/"}
                className="flex justify-between transition-all hover:text-zinc-50"
              >
                List <span className="spanPro">Pro</span>
              </Link>
              <Link
                href={"/"}
                className="flex justify-between transition-all hover:text-zinc-50"
              >
                Kanban <span className="spanPro">Pro</span>
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <div className="flex justify-between gap-2">
                <IconAlignJustified />
                <span>Forms</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <Link
                href={"/"}
                className="flex justify-between transition-all hover:text-zinc-50"
              >
                Form Elements 
              </Link>
              <Link
                href={"/"}
                className="flex justify-between transition-all hover:text-zinc-50"
              >
                Form Layout 
              </Link>
              <Link
                href={"/"}
                className="flex justify-between transition-all hover:text-zinc-50"
              >
                Form Validation <span className="spanPro">Pro</span>
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Link href={"/"} className="linkNav">
          <IconTable />
          <span>Tables</span>
        </Link>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <div className="flex justify-between gap-2">
                <IconClipboardText />
                <span>Pages</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <Link
                href={"/"}
                className="flex justify-between transition-all hover:text-zinc-50"
              >
                Settings
              </Link>
              <Link
                href={"/"}
                className="flex justify-between transition-all hover:text-zinc-50"
              >
                File Manager <span className="spanPro">Pro</span>
              </Link>
              <Link
                href={"/"}
                className="flex justify-between transition-all hover:text-zinc-50"
              >
                Data Tables <span className="spanPro">Pro</span>
              </Link>
              <Link
                href={"/"}
                className="flex justify-between transition-all hover:text-zinc-50"
              >
                Pricing Tables <span className="spanPro">Pro</span>
              </Link>
              <Link
                href={"/"}
                className="flex justify-between transition-all hover:text-zinc-50"
              >
                Error Page <span className="spanPro">Pro</span>
              </Link>
              <Link
                href={"/"}
                className="flex justify-between transition-all hover:text-zinc-50"
              >
                Mail Sucess <span className="spanPro">Pro</span>
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </nav>
    </div>
  );
}
