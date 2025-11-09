import { useNavigate } from "react-router";
import { Button } from "@/components/Button";
import { useParseDate } from "@hooks/useParseDate";
import { SubscriptionsMock } from "@mocks/Subscriptions.mock"
import type { ReactNode } from "react";
import { BiDumbbell } from "react-icons/bi";


const subscription = SubscriptionsMock.filter((subscription => subscription.status === 'active'))[0];

export const SubscriptionStatus = () => {
  const navigate = useNavigate();

  const isNearlyOversubscription = (date: number): ReactNode => {
    const today = new Date().getDate();
    const endDay = new Date(date).getDate();

    if (endDay - today <= 7) {
      return (
        <p className="text-red-500 font-bold">Tu suscripción está a punto de caducar</p>
      )
    }
  }

  return (
    <section className="flex flex-col items-center p-2 w-full md:w-2/5">
      <p className="text-xl">Tus suscripciones activas</p>
      <div>
        <p className="text-center"><BiDumbbell />{subscription.name}</p>
        <p>Válidad desde el {useParseDate(subscription.validFrom)} hasta el {useParseDate(subscription.validTo)}</p>
        {
          isNearlyOversubscription(subscription.validTo)
        }
        <p className="text-justify">Con tu suscripción tienes acceso a: <span className="italic">{subscription.accessTo.join(', ')}</span></p>
        <p>Créditos semanales: {subscription.weeklyCredits}</p>
        <p>Créditos restantes: {subscription.weeklyCreditsLeft}</p>
        <div className="flex flex-col items-center">
          <Button
            type='info'
            action={() => { navigate('/subscriptions') }}
          >Suscripciones</Button>
        </div>
      </div>
    </section>
  )
}
