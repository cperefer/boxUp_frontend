import type { MonthlyStat } from "@/interfaces/MonthlyStat";

export const MonthlyStatsMock: MonthlyStat[] = [
  {
    description: "Este mes has asistido a 10 clases",
    type: "numClasses",
  },
  {
    description: "Enhorabuena! Estás en el 1% de asistencia",
    type: "topAssist",
  },
  {
    description: "Este mes has aumentado tu Clean & Jerk (+5 kg)",
    type: "prImprovement",
  },
  {
    description: "Entrenas más los lunes",
    type: "favoriteSchedule",
  },
  {
    description: "Llevas 6 semanas entrenando sin faltar",
    type: "streak",
  },
];
