import { createBrowserRouter, Navigate } from "react-router";
import { Dashboard } from "../dashboard/Dashboard";

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