import { MonthlySummary } from "./MonthlySummary"
import { NextReservations } from "./NextReservations"
import { SubscriptionStatus } from "./SubscriptionStatus"
import { WelcomeUser } from "./WelcomeUser"

export const Dashboard = () => {
  return (
    <div>
      <WelcomeUser />
      <div className="flex flex-col md:flex-row md:justify-around pb-2">
        <NextReservations />
        <MonthlySummary />
      </div>
      <div className="flex flex-col md:flex-row md:justify-around">
        <SubscriptionStatus />
      </div>
    </div>
  )
}
