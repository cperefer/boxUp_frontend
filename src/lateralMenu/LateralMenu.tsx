import { useMainStore } from "@/store/mainStore";
import { ProfileData } from "./components/ProfileData";
import { LateralMenuLinks } from "./components/LateralMenuLinks";
import { LateralMenuContact } from "./components/LateralMenuContact";

export const LateralMenu = () => {
  const { isMenuOpen } = useMainStore();

  return (
    <div className={`bg-primary text-white z-1 h-dvh w-[50%] md:w-[30%] pt-10 px-2 transition-all duration-300 ease-in-out fixed top-0 ${isMenuOpen ? 'left-0' : '-left-400'}`}>
      <ProfileData />
      <LateralMenuLinks />
      <LateralMenuContact />
    </div>
  )
}
