import { useParseDate } from "../hooks/useParseDate";
import { SubscriptionsMock, type Subscription } from "../mocks/Subscriptions.mock"
import { BiDumbbell } from "react-icons/bi";


const subscriptions = SubscriptionsMock;

export const SubscriptionStatus = () => {
  return (
    <section className="flex flex-col items-center py-2 w-full md:w-2/5">
      <p className="text-xl">Tus suscripciones activas</p>
      {
        subscriptions.map(({ id, accessTo, name, status, validFrom, validTo, weeklyCredits, weeklyCreditsLeft }: Subscription) =>
          status === 'active' && (
            <div key={id}>
              <p className="text-center"><BiDumbbell />{name}</p>
              <p>Válidad desde el {useParseDate(validFrom)} hasta el {useParseDate(validTo)}</p>
              <p>Con tu suscripción tienes acceso a: <span className="italic">{accessTo.join(', ')}</span></p>
              <p>Créditos semanales: {weeklyCredits}</p>
              <p>Créditos restantes: {weeklyCreditsLeft}</p>
            </div>
          )
        )
      }
    </section>
  )
}
