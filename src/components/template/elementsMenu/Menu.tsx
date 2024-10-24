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
              <div onClick={() => handleLinkClick("eCommerce Pro")} className="flex justify-between transition-all hover:text-zinc-50 cursor-pointer">
                eCommerce <span className="spanPro">Pro</span>
              </div>
              <div onClick={() => handleLinkClick("Analytics")} className="flex justify-between transition-all hover:text-zinc-50 cursor-pointer">
                Analytics 
              </div>
              <div onClick={() => handleLinkClick("Marketing Pro")} className="flex justify-between transition-all hover:text-zinc-50 cursor-pointer">
                Marketing <span className="spanPro">Pro</span>
              </div>
              <div onClick={() => handleLinkClick("CRM Pro")} className="flex justify-between transition-all hover:text-zinc-50 cursor-pointer">
                CRM <span className="spanPro">Pro</span>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div onClick={() => handleLinkClick("Calendar")} className="linkNav cursor-pointer">
          <IconCalendar />
          <span>Calendar</span>
        </div>
        <div onClick={() => handleLinkClick("Profile")} className="linkNav cursor-pointer">
          <IconUser />
          <span>Profile</span>
        </div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <div className="flex justify-between gap-2">
                <IconList />
                <span>Task</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div onClick={() => handleLinkClick("List Pro")} className="flex justify-between transition-all hover:text-zinc-50 cursor-pointer">
                List <span className="spanPro">Pro</span>
              </div>
              <div onClick={() => handleLinkClick("Kanban Pro")} className="flex justify-between transition-all hover:text-zinc-50 cursor-pointer">
                Kanban <span className="spanPro">Pro</span>
              </div>
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
              <div onClick={() => handleLinkClick("Form Elements")} className="flex justify-between transition-all hover:text-zinc-50 cursor-pointer">
                Form Elements 
              </div>
              <div onClick={() => handleLinkClick("Form Layout")} className="flex justify-between transition-all hover:text-zinc-50 cursor-pointer">
                Form Layout 
              </div>
              <div onClick={() => handleLinkClick("Form Validation Pro")} className="flex justify-between transition-all hover:text-zinc-50 cursor-pointer">
                Form Validation <span className="spanPro">Pro</span>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div onClick={() => handleLinkClick("Tables")} className="linkNav cursor-pointer">
          <IconTable />
          <span>Tables</span>
        </div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <div className="flex justify-between gap-2">
                <IconClipboardText />
                <span>Pages</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div onClick={() => handleLinkClick("Settings")} className="flex justify-between transition-all hover:text-zinc-50 cursor-pointer">
                Settings
              </div>
              <div onClick={() => handleLinkClick("File Manager Pro")} className="flex justify-between transition-all hover:text-zinc-50 cursor-pointer">
                File Manager <span className="spanPro">Pro</span>
              </div>
              <div onClick={() => handleLinkClick("Data Tables Pro")} className="flex justify-between transition-all hover:text-zinc-50 cursor-pointer">
                Data Tables <span className="spanPro">Pro</span>
              </div>
              <div onClick={() => handleLinkClick("Pricing Tables Pro")} className="flex justify-between transition-all hover:text-zinc-50 cursor-pointer">
                Pricing Tables <span className="spanPro">Pro</span>
              </div>
              <div onClick={() => handleLinkClick("Error Page Pro")} className="flex justify-between transition-all hover:text-zinc-50 cursor-pointer">
                Error Page <span className="spanPro">Pro</span>
              </div>
              <div onClick={() => handleLinkClick("Mail Success Pro")} className="flex justify-between transition-all hover:text-zinc-50 cursor-pointer">
                Mail Success <span className="spanPro">Pro</span>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </nav>
    </div>
  );
}
