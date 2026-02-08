import { getMonthlyStats } from "@/actions/getMonthlyStats.action";
import type { MonthlyStat } from "@/interfaces/MonthlyStat";
import { useEffect, useState } from "react";

export const useMonthlyStats = (id: string = "") => {
  const [data, setData] = useState<MonthlyStat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      return;
    }

    const loadData = async () => {
      setLoading(true);

      const { stats } = await getMonthlyStats(id);
      setData(stats);

      setLoading(false);
    };

    loadData();
  }, [id]);

  return {
    data,
    loading,
  };
};
