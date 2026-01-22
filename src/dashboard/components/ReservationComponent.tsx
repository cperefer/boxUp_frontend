import type { Reservation } from "@/interfaces/Classes";
import { LuCalendarClock } from "react-icons/lu";
import { useParseDate } from "../../hooks/useParseDate";
import { SeeCancelReservationButtons } from "@/components/SeeCancelReservationButtons";

export const ReservationComponent = ({ reservation }: { reservation: Reservation }) => {
  // https://medium.com/@royeeshemesh/customizable-confirmation-dialog-in-react-js-using-hooks-context-api-and-typescript-2ab52a46228
  return (
    <div className="w-full justify-center flex flex-row pt-2">
      <div className="w-75 pb-1 border-b border-b-primary" key={reservation.id}>
        <p><LuCalendarClock className="mr-2" />{useParseDate(reservation.date, true)}</p>
        <p className="ml-2">{reservation.type}</p>
      </div>
      <div className="flex flex-row items-center w-25 gap-2 border-b border-b-primary justify-center">
        <SeeCancelReservationButtons id={reservation.id} date={reservation.date} />
      </div>
    </div>
  )
}
