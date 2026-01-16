import { MembershipComponent } from "../components/MembershipComponent"

export const ReservationsPage = () => {

  return (
    // info (creditos, tarifa, validez...)
    // Contenedor de reservas ordenadas por fecha, 3 / 4 columnas desktop 1 mobile
    // Cartas, en el 1/4 izquierdo un icono y un color para diferenciar clase. A la derecha clase, fecha y hora y estado (cancelada, consume credito si aplica)
    // Implementar throttling?
    <div className="pt-10">
      <p className="font-bold text-2xl pl-5 pt-2">Mis reservas</p>
      <div>
        <MembershipComponent />
      </div>
    </div>
  )
}
