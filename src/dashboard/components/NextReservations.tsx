import type { Reservation } from "@/interfaces/Classes";
import { ReservationComponent } from "./ReservationComponent";
import { useAuthStore } from "@/store/authStore";
import { useReservations } from "@/hooks/useReservations";
import Skeleton from "react-loading-skeleton";

export const NextReservations = () => {
  const { user } = useAuthStore();
  console.log(user);
  const { data, loading } = useReservations(user?.id);

  return (
    <section className="flex flex-col items-center py-2 w-full md:w-2/5">
      <p className="text-xl">Últimas reservas</p>
      <div className="w-full px-2">
        {loading ? (
          <Skeleton height={40} count={6} />
        ) : (
          data.map((reservation: Reservation) => (
            <ReservationComponent
              key={reservation.id}
              reservation={reservation}
            />
          ))
        )}
      </div>
    </section>
  );
};
