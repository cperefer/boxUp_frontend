import { CustomProfilePicture } from "@/components/custom/CustomProfilePicture"
import { Link } from "react-router"

export const ProfileData = () => {
  return (
    <div className="flex items-center flex-col text-white back pb-2">
      <CustomProfilePicture size="sm" />
      <Link to='/'>Miguel (editar perfil)</Link>
    </div>
  )
}
