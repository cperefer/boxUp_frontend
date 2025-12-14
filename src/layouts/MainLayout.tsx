import { useEffect, useRef } from "react"
import { Outlet } from "react-router"
import { LateralMenu } from "@/lateralMenu/LateralMenu"
import { Navbar } from "@/components/navbar/Navbar"
import { useMainStore } from "@/store/mainStore"

export const MainLayout = () => {
  const menuRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLDivElement>(null)
  const { isMenuOpen, closeMenu } = useMainStore()

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node

      if (
        menuRef.current?.contains(target) ||
        menuButtonRef.current?.contains(target)
      ) {
        return;
      }

      closeMenu()
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }

  }, [isMenuOpen, closeMenu])

  return (
    <div className="min-h-screen">
      <Navbar menuButtonRef={menuButtonRef} />
      <div ref={menuRef}>
        <LateralMenu />
      </div>
      <Outlet />
    </div>
  )
}
