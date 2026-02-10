import { CustomProfilePicture } from "@/components/custom/CustomProfilePicture";
import { useAuthStore } from "@/store/authStore";

export const WelcomeUser = () => {
  const { user } = useAuthStore();
  return (
    <section className="flex flex-col items-center bg-gray-700 bg-[url(/profile_bg.jpg)] bg-position-[2px] bg-no-repeat bg-cover w-full drop-shadow-xl pb-2">
      <CustomProfilePicture />
      <p className="text-2xl pb-2 text-white">Bienvenido, {user?.firstName}!</p>
      <p className="text-white">
        Tu próxima reserva es el 28/10/2025 a las 18:30
      </p>
    </section>
  );
};
