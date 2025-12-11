import { createBrowserRouter, Navigate } from "react-router";
import { Dashboard } from "@/dashboard/pages/Dashboard";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: '*',
    element: <Navigate to='/' />
  }
])