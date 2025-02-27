import { create } from 'zustand';

interface ChatState {
  isThreadActive: boolean; 
  setThreadActive: (isActive: boolean) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  isThreadActive: true,
  setThreadActive: (isActive) => set({ isThreadActive: isActive }),
}));
