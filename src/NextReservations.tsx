import { NextReservationsMock, type Reservation } from "./mocks/NextReservations.mock"
import { ReservationComponent } from "./ReservationComponent"

export const NextReservations = () => {
  return (
    <section className="flex flex-col items-center py-2">
      <p className="text-xl">Próximas reservas</p>
      <div className="w-full px-2">
        {
          NextReservationsMock.map((reservation: Reservation) => (
            <ReservationComponent reservation={reservation} />
          ))
        }
      </div>
    </section>
  )
}
