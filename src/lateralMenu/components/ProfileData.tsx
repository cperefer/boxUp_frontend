import { CustomProfilePicture } from "@/components/custom/CustomProfilePicture"
import { useAuthStore } from "@/store/authStore"
import { Link } from "react-router"

export const ProfileData = () => {
  const { user } = useAuthStore()
  return (
    <div className="flex items-center flex-col text-white back pb-2">
      <CustomProfilePicture size="sm" />
      <Link to='/'>{user?.firstName} (editar perfil)</Link>
    </div>
  )
}
