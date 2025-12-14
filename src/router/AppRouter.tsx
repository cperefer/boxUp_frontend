import { createBrowserRouter, Navigate } from "react-router";
import { Dashboard } from "@/dashboard/pages/Dashboard";
import { MainLayout } from "@/layouts/MainLayout";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
    ]
  },
  {
    path: '*',
    element: <Navigate to='/' />
  }
])