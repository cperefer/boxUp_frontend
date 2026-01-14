import { loginAction } from '@/auth/actions/login.action';
import type { User } from '@/interfaces/User';
import { create } from 'zustand'

type AuthStatus = 'logged' | 'not-logged' | 'checking';

interface AuthState {
  authToken: string | null;
  status: AuthStatus;
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: () => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
  authToken: null,
  status: 'checking',
  user: null,
  login: async (email: string, password: string) => {
    try {
      const data = await loginAction(email, password);
      console.log(data)
      localStorage.setItem('token', data.token);
  
      set({
        user: data.user,
        authToken: data.token,
        status: 'logged',
      });
  
      return true;
    } catch (_) {
      console.log('aaaaaaaaaaaaaa')
      set({
        authToken: null,
        status: 'not-logged',
        user: null,
      });

      return false;
    }
  },
  logout: () => {
    set({
      authToken: null,
      status: 'not-logged',
      user: null,
    });

    localStorage.removeItem('token');
  },
  register: () => {
    // set({ isMenuOpen: false })
  }
}))