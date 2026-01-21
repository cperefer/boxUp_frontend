import { NextReservationsMock } from "@mocks/NextReservations.mock"
import type { Reservation } from "@/interfaces/Classes";
import { ReservationComponent } from "./ReservationComponent"

export const NextReservations = () => {
  return (
    <section className="flex flex-col items-center py-2 w-full md:w-2/5">
      <p className="text-xl">Últimas reservas</p>
      <div className="w-full px-2">
        {
          NextReservationsMock.map((reservation: Reservation) => (
            <ReservationComponent key={reservation.id} reservation={reservation} />
          ))
        }
      </div>
    </section>
  )
}
