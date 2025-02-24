import { useState } from "react"; // {{ edit_1 }}
import { Menu, BarChartBig, Table, User, FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/custom/Sidebar/accordion-sidebar-1";
import damDnLogo from "@/assets/images/damDn-logo.svg";
import "./Sidebar.css";
import AccordionItemComponent from "./AccordionItem";
import AccordionContentWithDelete from "./AccordionContentWithDelete";
import AccordionContentWithAccordion from "./AccordionContentWithAccordion";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 640);

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
    if (isOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsAnimating(false);
      }, 300);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <section className="max-w-[328px] p-4">
      <header className="pt-[16px] pb-[16px] flex items-center justify-between hover:bg-[#F5F5F5]/90 transition duration-200">
        <img src={damDnLogo} alt="damDN Logo" className="h-8 w-auto" />
        <Button
          variant="ghost"
          size="icon"
          className="justify-end-important"
          onClick={toggleAccordion}
        >
          <Menu className="w-6 h-6" />
        </Button>
      </header>
      <div
        className={` transition-all duration-500 ease-in-out ${
          isOpen || isAnimating
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
