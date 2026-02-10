import { useAuthStore } from "@/store/authStore";
import { MonthlySummary } from "../components/MonthlySummary";
import { NextReservations } from "../components/NextReservations";
import { SubscriptionStatus } from "../components/SubscriptionStatus";
import { UpcomingEvents } from "../components/UpcomingEvents";
import { WelcomeUser } from "../components/WelcomeUser";
import { useReservations } from "@/hooks/useReservations";

export const DashboardPage = () => {
  const { user } = useAuthStore();
  const { data, loading } = useReservations(user?.id);

  return (
    <div className="pt-10">
      <WelcomeUser data={data} loading={loading} />
      <div className="flex flex-col md:flex-row md:justify-around pb-2">
        <NextReservations data={data} loading={loading} />
        <MonthlySummary />
      </div>
      <div className="flex flex-col md:flex-row md:justify-around">
        <SubscriptionStatus />
        <UpcomingEvents />
      </div>
    </div>
  );
};
