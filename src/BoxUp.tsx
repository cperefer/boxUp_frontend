import { useEffect } from "react"
import { RouterProvider } from "react-router"
import { appRouter } from "./router/AppRouter"
import { useAuthStore } from "./store/authStore"

export const BoxUp = () => {
  const { checkAuth } = useAuthStore();
  useEffect(() => {
    checkAuth()
  }, []);

  return (
    <div className="flex flex-col">
      <RouterProvider router={appRouter} />
    </div>
  )
}
