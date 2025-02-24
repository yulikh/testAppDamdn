import { MessageCircle, Settings, LogOut } from "lucide-react";

export default function AccordionContentWithAccordion() {
  return (
    <ul className="w-full">
        <li className="pt-4 pb-4 w-full hover:bg-[#F5F5F5]/90 transition-all transition-duration-300">
        <button className="w-full flex items-center justify-start gap-4">
            <Settings className="w-6 h-6" />
            <p>Settings</p>
        </button>
        </li>
        <li className="pt-4 pb-4 w-full hover:bg-[#F5F5F5]/90 transition-all transition-duration-300">
        <button className="w-full flex items-center justify-start gap-4">
            <MessageCircle className="w-6 h-6" />
            <p>Contact us</p>
        </button>
        </li>
        <li className="pt-4 pb-4 w-full hover:bg-[#F5F5F5]/90 transition-all transition-duration-300">
        <button className="w-full flex items-center justify-start gap-4">
            <LogOut className="w-6 h-6 text-red-500" />
            <p>Logout</p>
        </button>
        </li>
    </ul>
  );
}
