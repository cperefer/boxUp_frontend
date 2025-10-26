import { RouterProvider } from "react-router"
import { appRouter } from "./router/AppRouter"
import { Navbar } from "./Navbar"

export const BoxUp = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <RouterProvider router={appRouter} />
    </div>
  )
}
