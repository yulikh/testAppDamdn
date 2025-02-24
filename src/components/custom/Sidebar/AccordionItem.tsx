import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/custom/Sidebar/accordion-sidebar-1";

interface AccordionItemProps {
  value: string;
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
}

const AccordionItemComponent: React.FC<AccordionItemProps> = ({
  value,
  icon: Icon,
  label,
  children,
}) => (
  <AccordionItem value={value}>
    <AccordionTrigger>
      <Icon className="w-6 h-6" />
      {label}
    </AccordionTrigger>
    {value === "item-4" ? (
      <AccordionContent className="hover:bg-transparent">{children}</AccordionContent>
    ) : (
      <AccordionContent className="hover:bg-[#F5F5F5]/90">{children}</AccordionContent>
    )}
  </AccordionItem>
);

export default AccordionItemComponent;
