import { RouterProvider } from "react-router"
import { appRouter } from "./router/AppRouter"

export const BoxUp = () => {
  return (
    <div className="flex flex-col">
      <RouterProvider router={appRouter} />
    </div>
  )
}
