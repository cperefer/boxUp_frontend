import { Outlet } from "react-router"

export const AuthLayout = () => {
  return (
    // <div className="min-h-screen bg-[url(/bg/auth.jpg)] bg-cover">
    <div className="min-h-screen bg-gray-300">
      <div className="min-h-[85vh] pt-0 md:pt-10 flex flex-row align-top justify-around">
        <Outlet />
      </div>
    </div>
  )
}
