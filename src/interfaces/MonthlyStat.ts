export type MonthlyStatType =
  | "numClasses"
  | "ranking"
  | "prImprovement"
  | "favoriteSchedule"
  | "topAssist"
  | "streak";

export interface MonthlyStat {
  description: string;
  type: MonthlyStatType;
}
