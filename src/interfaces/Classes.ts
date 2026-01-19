import type { ReactNode } from "react";

export type Class = | "CrossFit" | "Haltero" | "Gymnastics" | "Endurance" | "Special"; 

export interface ClassColorDictionary {
  [type: string]: string;
}

export interface ClassIconDictionary {
  [type: string]: ReactNode;
}

export interface Reservation {
  id: number;
  type: Class;
  title?: string;
  date: number;
}
