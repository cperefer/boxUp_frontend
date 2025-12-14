import type { RefObject } from 'react';
import { create } from 'zustand'

interface MainState {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: (menuRef: RefObject<HTMLDivElement | null>) => void;
}

export const useMainStore = create<MainState>()((set, get) => ({
  isMenuOpen: false,
  toggleMenu: () => {
    set({
      isMenuOpen: !get().isMenuOpen
    })
  },
  closeMenu: (menuRef) => {
    if (!get().isMenuOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        set({
          isMenuOpen: false
        })
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }
}))