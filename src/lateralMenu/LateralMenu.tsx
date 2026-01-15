import { useUIStore } from "@/store/uiStore";
import { useAuthStore } from "@/store/authStore";
import { ProfileData } from "./components/ProfileData";
import { LateralMenuLinks } from "./components/LateralMenuLinks";
import { LateralMenuContact } from "./components/LateralMenuContact";
import { CustomButton } from "@/components/custom/CustomButton";

export const LateralMenu = () => {
  const { isMenuOpen } = useUIStore();
  const { logout } = useAuthStore();

  return (
    <div className={`bg-primary text-white z-1 h-dvh w-[50%] md:w-[30%] xl:w-[15%] pt-10 px-2 transition-all duration-300 ease-in-out fixed top-0 ${isMenuOpen ? 'left-0' : '-left-400'}`}>
      <ProfileData />
      <LateralMenuLinks />
      <LateralMenuContact />
      <CustomButton
        type="error"
        action={logout}
      >
        Cerrar sesión
      </CustomButton>
    </div>
  )
}
