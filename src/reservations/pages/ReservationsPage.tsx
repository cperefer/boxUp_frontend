import { HistoricReservationComponent } from "../components/HistoricReservationComponent"
import { MembershipComponent } from "../components/MembershipComponent"

export const ReservationsPage = () => {

  return (
    <div className="pt-10 pl-5">
      <p className="font-bold text-2xl pt-2">Mis reservas</p>
      <div>
        <MembershipComponent />
        <HistoricReservationComponent />
      </div>
    </div>
  )
}
