import type { MonthlyStatType } from "@interfaces/MonthlyStat";
import type { JSX } from "react";
import { FaClock, FaRegClock, FaWalking } from "react-icons/fa";
import { FaFireFlameCurved } from "react-icons/fa6";
import { GiPodiumWinner, GiWeightLiftingUp } from "react-icons/gi";

export const statsIconMap: Record<MonthlyStatType, JSX.Element> = {
  numClasses: <FaWalking />,
  topAssist: <GiPodiumWinner />,
  favoriteSchedule: <FaRegClock />,
  prImprovement: <GiWeightLiftingUp />,
  ranking: <FaClock />,
  streak: <FaFireFlameCurved />,
};
