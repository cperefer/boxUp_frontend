import type { Reservation } from "@/interfaces/Classes";
import { ReservationComponent } from "./ReservationComponent";
import Skeleton from "react-loading-skeleton";

interface Props {
  data: Reservation[];
  loading: boolean;
}

export const NextReservations = ({ data, loading }: Props) => {
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
