import { NextReservations } from "./NextReservations"
import { WelcomeUser } from "./WelcomeUser"

export const Dashboard = () => {
  return (
    <div>
      <div>
        <WelcomeUser />
        <NextReservations />
      </div>
    </div>
  )
}
