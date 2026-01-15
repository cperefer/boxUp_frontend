import { createBrowserRouter, Navigate } from "react-router";
import { Dashboard } from "@/dashboard/pages/Dashboard";
import { MainLayout } from "@/layouts/MainLayout";
import { LoginPage } from "@/auth/pages/LoginPage";
import { AuthLayout } from "@/auth/pages/layouts/AuthLayout";
import { AuthenticatedRoutes } from "./ProtectedRoutes";

export const appRouter = createBrowserRouter([
  {
    path: "/login",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />
      },
    ]
  },
  {
    path: "/dashboard",
    element:
      <AuthenticatedRoutes>
        <MainLayout />
      </AuthenticatedRoutes>,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
    ]
  },
  {
    path: '*',
    element: <Navigate to='/dashboard' />
  }
])