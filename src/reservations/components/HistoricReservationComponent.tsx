import { useAuthStore } from "@/store/authStore";
import { CardReservationComponent } from "./CardReservationComponent"
import { useReservations } from "@/hooks/useReservations";
import 'react-loading-skeleton/dist/skeleton.css';
import { CardSkeleton } from "./CardSkeleton";

export const HistoricReservationComponent = () => {
  const { user } = useAuthStore();

  if (!user) {
    return;
  }

  const { data, loading } = useReservations(user?.id)

  return (
    <div>
      <p className="text-xl font-bold">Histórico de reservas</p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 pr-5">
        {
          loading && (
            <CardSkeleton cardItems={8} />
          )
        }
        {
          !loading && data.length && data.map(({ id, type, date, title }) => (
            <CardReservationComponent id={id} type={type} date={date} title={title} />
          ))
        }
      </div>
    </div>
  )
}
