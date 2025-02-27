import Sidebar from "@/components/custom/Sidebar/Sidebar";
import ChatBubble from "@/components/custom/Thread/ChatBubble";
import ChatBubbleResponse from "@/components/custom/Thread/ChatBubbleResponse";
import PostedQuestion from "@/components/custom/Thread/PostedQuestion";
import { Button } from "@/components/ui/button";
import { useChatStore } from "@/stores/chatStore";
import { useSidebarStore } from "@/stores/sideBarStore";

export default function HomePage() {
  const { isSidebarOpen, closeSidebar } = useSidebarStore();
  const { isThreadActive } = useChatStore();

  return (
    <main className="min-h-screen flex flex-col w-full">
      <div className="flex-1 w-full flex flex-col md:flex-row">
        <Sidebar />
        <div className="relative z-1 ml-2 mr-2 md:w-full pt-8">
          {!isThreadActive ? (
            <>
              <ChatBubble />
            </>
          ) : (
            <>
              {(!isSidebarOpen || window.innerWidth >= 768) && (
                <>
                  <PostedQuestion />
                  <ChatBubbleResponse />
                  <ChatBubble />
                </>
              )}
            </>
          )}
        </div>
      </div>
      {isSidebarOpen && isThreadActive && window.innerWidth <= 768 && (
         <div className="fixed bottom-0 left-0 right-0 p-4 bg-background">
        <Button
          onClick={closeSidebar}
          variant="default"
          className="w-full rounded-none"
        >
          Go to thread
          </Button>
        </div>
      )}
    </main>
  );
}
