import { useState } from "react"; // {{ edit_1 }}
import { Menu, BarChartBig, Table, User, FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/custom/Sidebar/accordion-sidebar-1";
import damDnLogo from "@/assets/images/damDn-logo.svg";
import "./Sidebar.css";
import AccordionItemComponent from "./AccordionItem";
import AccordionContentWithDelete from "./AccordionContentWithDelete";
import AccordionContentWithAccordion from "./AccordionContentWithAccordion";
import { useSidebarStore } from "@/stores/sideBarStore";

export default function Sidebar() {
  const { isSidebarOpen, openSidebar, closeSidebar } = useSidebarStore();
  const [isAnimating, setIsAnimating] = useState(false);

  const accordionItems = [
    {
      value: "item-1",
      icon: BarChartBig,
      label: "Saved charts",
      content: <AccordionContentWithDelete />
    },
    {
      value: "item-2",
      icon: Table,
      label: "Saved tables",
      content: <AccordionContentWithDelete />
    },
    {
      value: "item-3",
      icon: FileQuestion,
      label: "Saved queries",
      content: <AccordionContentWithDelete />
    },
    {
      value: "item-4",
      icon: User,
      label: "Account",
      content: <AccordionContentWithAccordion />
    },
  ];

  const toggleAccordion = () => {
    if (isSidebarOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        closeSidebar();
        setIsAnimating(false);
      }, 300);
    } else {
      openSidebar();
    }
  };

  return (
    <section className="relative z-0 sm:min-w-[328px] p-4">
      <header className="pt-[16px] pb-[16px] flex items-center justify-between hover:bg-[#F5F5F5]/90 transition duration-200">
        <img src={damDnLogo} alt="damDN Logo" className="h-8 w-auto" />
        {window.innerWidth <= 768 && (
          <Button
            variant="ghost"
            size="icon"
          className="justify-end-important"
          onClick={toggleAccordion}
        >
          <Menu className="w-6 h-6" />
        </Button>
        )}
      </header>
      <div
        className={` transition-all duration-500 ease-in-out ${
          isSidebarOpen || isAnimating
            ? "max-h-[400px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <Accordion className="bg-transparent" type="single" collapsible>
          {accordionItems.map(({ value, icon, label, content }) => (
            <AccordionItemComponent
              key={value}
              value={value}
              icon={icon}
              label={label}
            >
              {content}
            </AccordionItemComponent>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
