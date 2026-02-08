import { parseDate } from "@/utils/parseDate";
import { useUpcomingEvents } from "@/hooks/useUpcomingEvents";

export const UpcomingEvents = () => {
  const { data, loading } = useUpcomingEvents();

  return (
    <section className="flex flex-col items-center py-2 w-full md:w-2/5">
      <p className="text-xl pb-2">Próximos eventos</p>
      <div className="px-2">
        {loading ? (
          <p>Cargando</p>
        ) : data.length ? (
          <ul>
            {data.map(({ id, name, date }) => (
              <li key={id}>
                <span className="italic">{parseDate(date)}</span> - {name}
              </li>
            ))}
          </ul>
        ) : (
          <p className="italic">No hay eventos próximamente</p>
        )}
      </div>
    </section>
  );
};
