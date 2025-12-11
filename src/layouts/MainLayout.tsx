import { LateralMenu } from "@/components/lateralMenu/LateralMenu"
import { Outlet } from "react-router"

export const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <LateralMenu />
      <Outlet />
    </div>
  )
}
