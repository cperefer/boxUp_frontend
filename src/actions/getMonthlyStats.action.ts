import { MonthlyStatsMock } from "@/mocks/MonthlyStats.mock";

export const getMonthlyStats = async (id: string) => {
  await new Promise((res) => setTimeout(res, 500));

  if (!id) {
    throw new Error("stats not found");
  }

  const data = {
    stats: MonthlyStatsMock,
  };

  return data;
};
