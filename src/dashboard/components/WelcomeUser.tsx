import { CustomProfilePicture } from "@/components/custom/CustomProfilePicture";
import type { Reservation } from "@/interfaces/Classes";
import { useAuthStore } from "@/store/authStore";
import { getNextReservation } from "@/utils/getNextReservation";
import { parseDate } from "@/utils/parseDate";

interface Props {
  data: Reservation[];
  loading: boolean;
}
export const WelcomeUser = ({ data, loading }: Props) => {
  const { user } = useAuthStore();
  let reservation = null;

  if (!loading) {
    reservation = getNextReservation(data);
  }

  return (
    <section className="flex flex-col items-center bg-gray-700 bg-[url(/profile_bg.jpg)] bg-position-[2px] bg-no-repeat bg-cover w-full drop-shadow-xl pb-2">
      <CustomProfilePicture />
      <p className="text-2xl pb-2 text-white">Bienvenido, {user?.firstName}!</p>
      <p className="text-white">
        {loading ? (
          <span className="invisible">cargando</span>
        ) : reservation ? (
          <>Tu próxima reserva es {parseDate(reservation.date, true)}</>
        ) : (
          <>No tienes próximas reservas</>
        )}
      </p>
    </section>
  );
};
