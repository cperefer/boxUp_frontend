import { create } from 'zustand'

interface MainState {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

export const useMainStore = create<MainState>()((set) => ({
  isMenuOpen: false,
  toggleMenu: () => {
    set((state) => ({
      isMenuOpen: !state.isMenuOpen
    }))
  },
  closeMenu: () => {
    set({ isMenuOpen: false })
  }
}))