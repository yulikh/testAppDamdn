import { create } from 'zustand';

interface SidebarState {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  openSidebar: () => void; 
  closeSidebar: () => void; 
}

export const useSidebarStore = create<SidebarState>((set) => ({
  isSidebarOpen: window.innerWidth >= 767, 
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  openSidebar: () => set({ isSidebarOpen: true }),
  closeSidebar: () => set({ isSidebarOpen: false }),
}));
