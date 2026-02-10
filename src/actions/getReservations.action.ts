import type { Reservation } from "@/interfaces/Classes";
import {
  DemoReservationsMock,
  NextReservationsMock,
} from "@/mocks/NextReservations.mock";

interface ReservationsResponse {
  reservations: Reservation[];
}
export const getReservationsAction = async (
  id: string,
): Promise<ReservationsResponse> => {
  await new Promise((res) => setTimeout(res, 500));

  if (id !== "0" && id !== "99") {
    return {
      reservations: [],
    };
  }

  console.log(id);

  const obtainedReservations =
    id === "99" ? DemoReservationsMock : NextReservationsMock;

  const reservations = obtainedReservations.sort(
    (a: Reservation, b: Reservation): number => {
      if (a.date > b.date) {
        return -1;
      }
      if (a.date < b.date) {
        return 1;
      }

      return 0;
    },
  );

  const data = {
    reservations,
  };

  return data;
};
