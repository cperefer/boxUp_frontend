import type { ReactNode } from "react";

export type Class = | "CrossFit" | "Haltero" | "Gymnastics" | "Endurance"; 

export interface ClassColorDictionary {
  [type: string]: string;
}

export interface ClassIconDictionary {
  [type: string]: ReactNode;
}

export interface Reservation {
  id: number;
  type: Class;
  date: number;
}
