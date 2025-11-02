import { FaWalking, FaClock } from "react-icons/fa";
import { GiPodiumWinner } from "react-icons/gi";
import { GiWeightLiftingUp } from "react-icons/gi";


export const MonthlySummary = () => {
  return (
    <section className="flex flex-col items-center py-2 w-full md:w-2/5">
      <p className="text-xl">Resumen mensual</p>
      <ul>
        <li><FaWalking /> Este mes has asistido a 10 clases</li>
        <li><GiPodiumWinner /> Enhorabuena! Estás en el top 1 de asistencia</li>
        <li><GiWeightLiftingUp /> Este mes has aumentado tu: clean & jerk</li>
        <li><FaClock /> Tu horario favorito es las 18:30</li>
      </ul>
    </section>
  )
}
