import { CardReservationComponent } from "./CardReservationComponent"

export const HistoricReservationComponent = () => {
  return (
    <div>
      <p className="text-xl font-bold">Histórico de reservas</p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 pr-5">
        <CardReservationComponent type="CrossFit" date={1768843800000} />
        <CardReservationComponent type="Haltero" date={1768843800000} />
        <CardReservationComponent type="Gymnastics" date={1768843800000} />
        <CardReservationComponent type="Circuncisión de Muti" date={1768843800000} />

      </div>
    </div>
  )
}
