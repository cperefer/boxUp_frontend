import type { Reservation } from "../../mocks/NextReservations.mock"
import { FiEye, FiTrash } from "react-icons/fi";
import { LuCalendarClock } from "react-icons/lu";

export const ReservationComponent = ({ reservation }: { reservation: Reservation }) => {
  const date = new Date(reservation.date);

  const handleSeeReservation = () => {

  }

  const handleCancelReservation = () => {

  }
  // https://medium.com/@royeeshemesh/customizable-confirmation-dialog-in-react-js-using-hooks-context-api-and-typescript-2ab52a46228
  return (
    <div className="w-full justify-center flex flex-row pt-2">
      <div className="w-75 pb-1 border-b border-b-primary" key={reservation.id}>
        <p><LuCalendarClock className="mr-2" />{`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`}</p>
        <p className="ml-2">{reservation.type}</p>
      </div>
      <div className="flex flex-row items-center w-25 gap-2 border-b border-b-primary">
        <button
          onClick={handleSeeReservation}
          className="bg-ok w-45 h-10 rounded-lg flex justify-center items-center align-middle cursor-pointer"
        ><FiEye /></button>
        <button
          onClick={handleCancelReservation}
          className="bg-error w-45 h-10 rounded-lg flex justify-center items-center align-middle cursor-pointer"
        ><FiTrash /></button>
      </div>
    </div>
  )
}
