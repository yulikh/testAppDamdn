import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Copy, Frown, Meh, Save, Smile } from "lucide-react";
const ChatBubbleResponse = () => {
  return (
      <Card className="w-full p-2 mb-4 rounded-lg border-gray-300 shadow-lg">
        <div className="pl-2 pt-2 pb-4 text-muted-foreground">
          <p className="text-base md:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </div>

        <div className="flex justify-between w-full">
          <div className="flex gap-2">
            <Button size="icon" variant="ghost">
              <Save></Save>
            </Button>
            <Button size="icon" variant="ghost">
              <Copy></Copy>
            </Button>
          </div>
          <div className="flex gap-2">
            <Button size="icon" variant="ghost">
              <Smile></Smile>
            </Button>
            <Button size="icon" variant="ghost">
              <Meh></Meh>
            </Button>
            <Button size="icon" variant="ghost">
              <Frown></Frown>
            </Button>
          </div>
        </div>
      </Card>
  );
};

export default ChatBubbleResponse;
