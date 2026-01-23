import type { Reservation } from "@/interfaces/Classes";
import { NextReservationsMock } from "@/mocks/NextReservations.mock";

interface ReservationsResponse {
  reservations: Reservation[]
}
export const getReservationsAction = async (id: string):Promise<ReservationsResponse> => {
  await new Promise((res) => setTimeout(res, 500));

  if(id !== '0') {
    return {
      reservations: []
    };
  }

  const reservations = NextReservationsMock.sort(
    (a: Reservation, b: Reservation): number => {
      if (a.date > b.date) {
        return -1;
      } 
      if (a.date < b.date) {
        return 1;
      } 
      
      return 0;
    }
  );
  
  const data = {
   reservations,
  }

  return data;
}
