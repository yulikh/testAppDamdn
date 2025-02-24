import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

export default function AccordionContentWithDelete() {
  return (
    <>
      <div>This is the content for saved charts.</div>
      <Button
        variant="ghost"
        size="icon"
        className="bg-transparent justify-end-important"
      >
        <Trash2 className="w-4 h-4"/>
      </Button>
    </>
  );
}
