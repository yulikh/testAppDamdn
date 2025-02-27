import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';
import './styles/ChatBubble.css';

const ChatBubble = () => {
    return (
      <Card className="w-full p-2 mb-4 rounded-lg border-gray-300 shadow-lg chat-bubble-mobile-flex">
        <div className="md:pb-4 w-full">
          <Textarea
            placeholder="Type your question here"
            className=" resize-none shadow-none no-border-input border-none !focus:ring-0 !focus:border-transparent"
          />
        </div>

        <div className="flex justify-end">
          <Button  size="icon" className="ml-2 chat-bubble-mobile-button">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </Card>
    );
  };

export default ChatBubble;