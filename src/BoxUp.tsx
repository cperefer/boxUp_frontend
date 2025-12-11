import { RouterProvider } from "react-router"
import { appRouter } from "./router/AppRouter"
import { Navbar } from "./components/navbar/Navbar"

export const BoxUp = () => {
  return (
    <div className="flex flex-col">
      <RouterProvider router={appRouter} />
    </div>
  )
}
