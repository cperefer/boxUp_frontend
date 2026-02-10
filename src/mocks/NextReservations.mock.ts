import type { Reservation } from "@/interfaces/Classes";
import { getMockedValidDate } from "@/utils/getMockedValidDate";

export const NextReservationsMock: Reservation[] = [
  {
    id: 1,
    type: "CrossFit",
    date: 1768843800000,
  },
  {
    id: 2,
    type: "CrossFit",
    date: 1760977800000,
  },
  {
    id: 3,
    type: "CrossFit",
    date: 1761150600000,
  },
  {
    id: 4,
    type: "Haltero",
    date: 1761206400000,
  },
  {
    id: 5,
    type: "Gymnastics",
    date: 1761206400000,
  },
  {
    id: 6,
    type: "Special",
    title: "WOD de navidad",
    date: 1766221200000,
  },
];

export const DemoReservationsMock: Reservation[] = [
  {
    id: 0,
    type: "CrossFit",
    date: getMockedValidDate("tomorrow"),
  },
  {
    id: 1,
    type: "CrossFit",
    date: getMockedValidDate(),
  },
  {
    id: 2,
    type: "CrossFit",
    date: getMockedValidDate("yesterday"),
  },
  {
    id: 3,
    type: "Special",
    date: getMockedValidDate("saturday"),
  },
];
