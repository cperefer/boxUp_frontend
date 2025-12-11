import { LateralMenu } from "@/components/lateralMenu/LateralMenu"
import { Navbar } from "@/components/navbar/Navbar"
import { Outlet } from "react-router"

export const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <LateralMenu />
      <Outlet />
    </div>
  )
}
