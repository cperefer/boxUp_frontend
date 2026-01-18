import type { Reservation } from "@/interfaces/Classes";
import { NextReservationsMock } from "@/mocks/NextReservations.mock";

interface ReservationsResponse {
  reservations: Reservation[]
}
export const getReservationsAction = async (id: string):Promise<ReservationsResponse> => {
  await new Promise((res) => setTimeout(res, 500));

  const data = {
   reservations: NextReservationsMock
  }

  return data;
}
