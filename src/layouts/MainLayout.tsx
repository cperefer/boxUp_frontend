import { useEffect, useRef } from "react"
import { Outlet } from "react-router"
import { LateralMenu } from "@/components/lateralMenu/LateralMenu"
import { Navbar } from "@/components/navbar/Navbar"
import { useMainStore } from "@/store/mainStore"

export const MainLayout = () => {
  const menuRef = useRef<HTMLDivElement>(null)
  const { isMenuOpen, toggleMenu, closeMenu } = useMainStore()

  useEffect(() => {
    closeMenu(menuRef)
  }, [isMenuOpen, toggleMenu])

  return (
    <div className="min-h-screen">
      <Navbar />
      <div ref={menuRef}>
        <LateralMenu />
      </div>
      <Outlet />
    </div>
  )
}
