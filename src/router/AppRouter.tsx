import { createBrowserRouter, Navigate } from "react-router";
import { DashboardPage } from "@/dashboard/pages/DashboardPage";
import { MainLayout } from "@/layouts/MainLayout";
import { LoginPage } from "@/auth/pages/LoginPage";
import { AuthLayout } from "@/auth/pages/layouts/AuthLayout";
import { AuthenticatedRoutes, NotAuthenticatedRoutes } from "./ProtectedRoutes";
import { ReservationsPage } from "@/reservations/pages/ReservationsPage";
import { ClassesPage } from "@/classes/pages/ClassesPage";
import { LeaderboardPage } from "@/leaderboard/pages/LeaderboardPage";
import { PRsPage } from "@/prs/pages/PRsPage";

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
        index: true,
        element: <Navigate to="/dashboard" replace />
      },
      {
        path: '/classes',
        element: <ClassesPage />, 
        children: [
          {
            path: '/classes/:id',
            element: <ClassesPage />
          },
        ]
      },
      {
        path: '/dashboard',
        element: <DashboardPage />
      },
      {
        path: '/leaderboard',
        element: <LeaderboardPage />
      },
      {
        path: '/prs',
        element: <PRsPage />
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