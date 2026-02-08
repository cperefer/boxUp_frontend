import { useMonthlyStats } from "@/hooks/useMonthlyStats";
import { useAuthStore } from "@/store/authStore";
import { statsIconMap } from "@/utils/statsIconMap";
import Skeleton from "react-loading-skeleton";

export const MonthlySummary = () => {
  const { user } = useAuthStore();
  const { data, loading } = useMonthlyStats(user?.id);

  return (
    <section className="flex flex-col items-center py-2 w-full md:w-2/5">
      <p className="text-xl">Resumen mensual</p>
      {loading ? (
        <div className="w-2/3 h-full">
          <Skeleton height={20} count={6}></Skeleton>
        </div>
      ) : (
        <ul>
          {data.map((stat) => (
            <li key={stat.type}>
              {statsIconMap[stat.type]} {stat.description}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
