import { useParseDate } from "@/hooks/useParseDate";
import { UpcomingEventsMock } from "@/mocks/UpcomingEvents.mock"

export const UpcomingEvents = () => {

  const events = UpcomingEventsMock;
  return (
    <section className="flex flex-col items-center py-2 w-full md:w-2/5">
      <p className="text-xl">Próximos eventos</p>
      <div className="w-full px-2">
        {
          events.length ?
            events.map(({ id, name, date }) => (
              <p key={id}><span className="italic">{useParseDate(date)}</span> - {name}</p>
            )) :
            <p className="italic">No hay eventos próximamente</p>
        }
      </div>
    </section>
  )
}
