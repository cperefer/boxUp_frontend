import { useAuthStore } from "@/store/authStore";
import { CardReservationComponent } from "./CardReservationComponent"
import { useReservations } from "@/hooks/useReservations";

export const HistoricReservationComponent = () => {
  const { user } = useAuthStore();

  if (!user) {
    return;
  }

  const { data, loading } = useReservations(user?.id)

  if (loading) {
    return (
      <p>La están peinando</p>
    )
  }


  return (
    <div>
      <p className="text-xl font-bold">Histórico de reservas</p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 pr-5">
        {
          data.length && data.map(({ type, date, title }) => (
            <CardReservationComponent type={type} date={date} title={title} />
          ))
        }
      </div>
    </div>
  )
}
