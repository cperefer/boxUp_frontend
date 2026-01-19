import { createBrowserRouter, Navigate } from "react-router";
import { DashboardPage } from "@/dashboard/pages/DashboardPage";
import { MainLayout } from "@/layouts/MainLayout";
import { LoginPage } from "@/auth/pages/LoginPage";
import { AuthLayout } from "@/auth/pages/layouts/AuthLayout";
import { AuthenticatedRoutes, NotAuthenticatedRoutes } from "./ProtectedRoutes";
import { ReservationsPage } from "@/reservations/pages/ReservationsPage";

export const appRouter = createBrowserRouter([
  {
    path: "/login",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element:
          <NotAuthenticatedRoutes>
            <LoginPage />
          </NotAuthenticatedRoutes>
      },
    ]
  },
  {
    path: "/",
    element:
      <AuthenticatedRoutes>
        <MainLayout />
      </AuthenticatedRoutes>,
    children: [
      {
        path: '/dashboard',
        element: <DashboardPage />
      },
      {
        path: '/reservations',
        element: <ReservationsPage />
      },
    ]
  },
  {
    path: '*',
    element: <Navigate to='/dashboard' />
  }
])