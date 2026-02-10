import type { Reservation } from "@/interfaces/Classes";

export const getNextReservation = (reservations: Reservation[]) => {
  if (!reservations.length) {
    return null;
  }

  const nextReservations = reservations.filter(
    (reservation) => reservation.date - Date.now() > 0,
  );

  if (!nextReservations.length) {
    return null;
  }

  return nextReservations.reduce((prev, curr) =>
    prev.date < curr.date ? prev : curr,
  );
};
