import type { Reservation } from "@/interfaces/Classes";
import { ReservationComponent } from "./ReservationComponent"
import { useAuthStore } from "@/store/authStore";
import { useReservations } from "@/hooks/useReservations";

export const NextReservations = () => {
  const { user } = useAuthStore();

  if (!user) {
    return;
  }

  const { data, loading } = useReservations(user?.id)

  return (
    <section className="flex flex-col items-center py-2 w-full md:w-2/5">
      <p className="text-xl">Últimas reservas</p>
      <div className="w-full px-2">
        {
          data.map((reservation: Reservation) => (
            <ReservationComponent key={reservation.id} reservation={reservation} />
          ))
        }
      </div>
    </section>
  )
}
