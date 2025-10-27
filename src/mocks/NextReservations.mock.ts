export interface Reservation {
  id: number;
  type: Class;
  date: number;
}

type Class = | "CrossFit" | "Halterofilia" | "Gymnastics" | "Endurance"; 

export const NextReservationsMock: Reservation[] = [
  {
    id: 1,
    type: 'CrossFit',
    date: 1760805000
  },
  {
    id: 2,
    type: 'CrossFit',
    date: 1760977800
  },
  {
    id: 3,
    type: 'CrossFit',
    date: 1761150600
  },
  {
    id: 4,
    type: 'Halterofilia',
    date: 1761206400
  },
  {
    id: 5,
    type: 'Gymnastics',
    date: 1761206400
  },
] 