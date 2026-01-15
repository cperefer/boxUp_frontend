import { MonthlySummary } from "../components/MonthlySummary"
import { NextReservations } from "../components/NextReservations"
import { SubscriptionStatus } from "../components/SubscriptionStatus"
import { UpcomingEvents } from "../components/UpcomingEvents"
import { WelcomeUser } from "../components/WelcomeUser"

export const DashboardPage = () => {
  return (
    <div>
      <WelcomeUser />
      <div className="flex flex-col md:flex-row md:justify-around pb-2">
        <NextReservations />
        <MonthlySummary />
      </div>
      <div className="flex flex-col md:flex-row md:justify-around">
        <SubscriptionStatus />
        <UpcomingEvents />
      </div>
    </div>
  )
}
