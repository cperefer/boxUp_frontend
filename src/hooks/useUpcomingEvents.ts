import { getUpcomingEventsAction } from "@/actions/getUpcomingEvents.action";
import type { UpcomingEvent } from "@/interfaces/UpcomingEvents";
import { useEffect, useState } from "react";

export const useUpcomingEvents = () => {
  const [data, setData] = useState<UpcomingEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const result = await getUpcomingEventsAction();
      setData(result.upcomingEvents);
      setLoading(false);
    };

    loadData();
  }, []);

  return {
    data,
    loading,
  };
};
