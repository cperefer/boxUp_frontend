import { createBrowserRouter, Navigate } from "react-router";
import { Dashboard } from "../Dashboard";

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