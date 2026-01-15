import { useAuthStore } from "@/store/authStore";
import type { PropsWithChildren } from "react";
import { Navigate } from "react-router";
import { MoonLoader } from "react-spinners";

export const NotAuthenticatedRoutes = ({ children }: PropsWithChildren) => {
  const { status } = useAuthStore();

  if (status === 'checking') {
    return <MoonLoader />;
  }

  if (status === 'logged') {
    return <Navigate to='/dashboard' />;
  }

  return children;
}

export const AuthenticatedRoutes = ({ children }: PropsWithChildren) => {
  const { status } = useAuthStore();

  if (status === 'checking') {
    return <MoonLoader />;
  }

  if (status === 'not-logged') {
    return <Navigate to='/login' />;
  }

  return children;
}

export const CoachRoutes = ({ children }: PropsWithChildren) => {
  const { status, user } = useAuthStore();

  if (status === 'checking') {
    return <MoonLoader />;
  }

  if (status === 'not-logged' || (user?.role !== 'admin' && user?.role !== 'coach')) {
    return <Navigate to='/dashboard' />;
  }

  return children;
}

export const AdminRoutes = ({ children }: PropsWithChildren) => {
  const { status, user } = useAuthStore();

  if (status === 'checking') {
    return <MoonLoader />;
  }

  if (status === 'not-logged' || user?.role !== 'admin') {
    return <Navigate to='/dashboard' />;
  }

  return children;
}