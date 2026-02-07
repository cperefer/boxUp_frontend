import { SubscriptionsMock } from "@mocks/Subscriptions.mock";
import { MembershipComponent } from "@/reservations/components/MembershipComponent";

const subscription = SubscriptionsMock.filter(
  (subscription) => subscription.status === "active",
)[0];

export const SubscriptionStatus = () => {
  return (
    <section className="flex flex-col items-center p-2 w-full md:w-2/5">
      <p className="text-xl">Tus suscripciones activas</p>
      <div>
        {!subscription ? (
          <MembershipComponent variant="compact" />
        ) : (
          <p className="text-center text-red-500">
            No tienes suscripciones activas
          </p>
        )}
      </div>
    </section>
  );
};
