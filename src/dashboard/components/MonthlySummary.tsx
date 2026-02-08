import { useMonthlyStats } from "@/hooks/useMonthlyStats";
import { useAuthStore } from "@/store/authStore";
import { statsIconMap } from "@/utils/statsIconMap";

export const MonthlySummary = () => {
  const { user } = useAuthStore();
  const { data, loading } = useMonthlyStats(user?.id);

  return (
    <section className="flex flex-col items-center py-2 w-full md:w-2/5">
      <p className="text-xl">Resumen mensual</p>
      <ul>
        {loading ? (
          <p>Loading...</p>
        ) : (
          data.map((stat) => (
            <li key={stat.type}>
              {statsIconMap[stat.type]} {stat.description}
            </li>
          ))
        )}
      </ul>
    </section>
  );
};
