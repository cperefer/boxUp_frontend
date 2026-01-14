import type { User } from '@/interfaces/User';
import { create } from 'zustand'

type AuthStatus = 'logged' | 'not-logged' | 'checking';

interface AuthState {
  authToken: string | null;
  status: AuthStatus;
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  register: () => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
  authToken: null,
  user: null,
  status: 'checking',
  login: (email: string, password: string) => {
    set({
      authToken: '',
      status: 'logged',
    })
  },
  logout: () => {
    set({
      status: 'not-logged'
    })
  },
  register: () => {
    // set({ isMenuOpen: false })
  }
}))