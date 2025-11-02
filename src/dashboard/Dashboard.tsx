import { MonthlySummary } from "./MonthlySummary"
import { NextReservations } from "./NextReservations"
import { WelcomeUser } from "./WelcomeUser"

export const Dashboard = () => {
  return (
    <div>
      <WelcomeUser />
      <div className="flex flex-col md:flex-row md:justify-around">
        <NextReservations />
        <MonthlySummary />
      </div>
    </div>
  )
}
