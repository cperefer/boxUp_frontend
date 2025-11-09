export interface Subscription {
  id: number;
  accessTo: string[];
  name: string;
  weeklyCredits: number,
  weeklyCreditsLeft: number,
  validFrom: number;
  validTo: number;
  status: Status;
}

type Status = | "active" | "expired";

export const SubscriptionsMock: Subscription[] = [
  {
    id: 0,
    accessTo: [
      'CrossFit',
      'Halterofilia',
      'Gymnastics',
      'Sábado especial'
    ],
    name: 'Completa',
    weeklyCredits: 5,
    weeklyCreditsLeft: 0,
    validFrom: 1759269600000,
    validTo: 1761951599000,
    status: Date.now() < 1761951599000 ? 'active' : 'expired'
  },
  {
    id: 1,
    accessTo: [
      'CrossFit',
      'Halterofilia',
      'Gymnastics',
      'Sábado especial'
    ],
    name: 'Completa',
    weeklyCredits: 5,
    weeklyCreditsLeft: 2,
    validFrom: 1761951600000,
    validTo: 1764543540000,
    status: Date.now() < 1764543540000 ? 'active' : 'expired'
  },
]