import type { Reservation } from "./mocks/NextReservations.mock"

export const ReservationComponent = ({ reservation }: { reservation: Reservation }) => {
  return (
    <div key={reservation.id}>
      <p>{reservation.date}</p>
      <p>{reservation.type}</p>
    </div>
  )
}
