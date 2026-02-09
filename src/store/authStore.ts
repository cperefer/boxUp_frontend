import { loginAction } from "@/auth/actions/login.action";
import type { User } from "@/interfaces/User";
import { userAthlete } from "@/mocks/user.mock";
import { isSessionExpired } from "@/utils/isSessionExpired";
import { create } from "zustand";

type AuthStatus = "logged" | "not-logged" | "checking";

interface AuthState {
  authToken: string | null;
  status: AuthStatus;
  user: User | null;
  checkAuth: () => void;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: () => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
  authToken: null,
  status: "checking",
  user: null,
  checkAuth: () => {
    const token = localStorage.getItem("token");

    if (!token || isSessionExpired(Number(token), Date.now())) {
      localStorage.removeItem("token");
      set({
        authToken: null,
        status: "not-logged",
        user: null,
      });

      return;
    }

    try {
      // Validar token (que ahora no se hace, obvio, porque como no lo valide contra mis narices...)

      set({
        authToken: token,
        user: userAthlete,
        status: "logged",
      });
    } catch (err) {
      console.error(err);
      set({
        authToken: null,
        status: "not-logged",
        user: null,
      });
    }
  },
  login: async (email: string, password: string) => {
    set({ status: "checking" });

    try {
      const data = await loginAction(email, password);
      console.log(data);
      localStorage.setItem("token", data.token);

      set({
        user: data.user,
        authToken: data.token,
        status: "logged",
      });

      return true;
    } catch (err) {
      console.error(err);
      set({
        authToken: null,
        status: "not-logged",
        user: null,
      });

      return false;
    }
  },
  logout: () => {
    set({
      authToken: null,
      status: "not-logged",
      user: null,
    });

    localStorage.removeItem("token");
  },
  register: () => {
    // set({ isMenuOpen: false })
  },
}));
