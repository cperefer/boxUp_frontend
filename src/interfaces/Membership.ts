import type { Class } from "./Classes";

export interface Membership {
  id: string;
  validUntil: number;
  name: string;
  isActive: boolean;
  includes: Class[];
  weeklyClasses: number;
}