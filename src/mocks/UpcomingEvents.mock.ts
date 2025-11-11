export interface UpcomingEvent {
  id: number;
  name: string;
  date: number
}

export const UpcomingEventsMock: UpcomingEvent[] = [
  {
    id: 0,
    name: 'Taller de halterofilia',
    date: 1763665200000
  },
  {
    id: 1,
    name: 'Cena de navidad',
    date: 1766257200000
  },
  {
    id: 2,
    name: 'Gymnastics workshop',
    date: 1768474800000
  },
]