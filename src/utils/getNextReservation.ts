import type { Reservation } from "@/interfaces/Classes";

export const getNextReservation = (reservations: Reservation[]) => {
  const ret = reservations
    .filter((reservation) => reservation.date - Date.now() > 0)
    .reduce((prev, curr) => (prev.date < curr.date ? prev : curr));

  return ret;
};
