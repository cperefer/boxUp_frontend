import type { UpcomingEvent } from "@/interfaces/UpcomingEvents";
import { UpcomingEventsMock } from "@/mocks/UpcomingEvents.mock";

interface UpcomingEventsResponse {
  upcomingEvents: UpcomingEvent[];
}

export const getUpcomingEventsAction =
  async (): Promise<UpcomingEventsResponse> => {
    await new Promise((res) => setTimeout(res, 500));

    const data = {
      upcomingEvents: UpcomingEventsMock,
    };

    return data;
  };
