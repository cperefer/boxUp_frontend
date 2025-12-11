import type { Reservation } from "../../mocks/NextReservations.mock"
import { FiEye, FiTrash } from "react-icons/fi";
import { LuCalendarClock } from "react-icons/lu";
import { useParseDate } from "../../hooks/useParseDate";
import { CustomButton } from "@/components/custom/CustomButton";

export const ReservationComponent = ({ reservation }: { reservation: Reservation }) => {
  const handleSeeReservation = () => {

  }

  const handleCancelReservation = () => {

  }
  // https://medium.com/@royeeshemesh/customizable-confirmation-dialog-in-react-js-using-hooks-context-api-and-typescript-2ab52a46228
  return (
    <div className="w-full justify-center flex flex-row pt-2">
      <div className="w-75 pb-1 border-b border-b-primary" key={reservation.id}>
        <p><LuCalendarClock className="mr-2" />{useParseDate(reservation.date, true)}</p>
        <p className="ml-2">{reservation.type}</p>
      </div>
      <div className="flex flex-row items-center w-25 gap-2 border-b border-b-primary">
        <CustomButton type="success" action={handleSeeReservation} size='sm'><FiEye /></CustomButton>
        <CustomButton type="error" action={handleCancelReservation} size='sm'><FiTrash /></CustomButton>
      </div>
    </div>
  )
}
