export const getMockedValidDate = (when: string = "") => {
  const now = new Date();
  const targetDate = new Date(now);
  const hour = when === "saturday" ? 10 : 18;
  const minutes = when === "saturday" ? 0 : 30;

  if (when === "yesterday") {
    targetDate.setDate(now.getDate() - 1);
  }

  if (when === "tomorrow") {
    targetDate.setDate(now.getDate() + 1);
  }

  if (when === "saturday") {
    const day = now.getDay();
    const daysSinceLastSaturday = day === 6 ? 7 : day + 1;
    targetDate.setDate(now.getDate() - daysSinceLastSaturday);
  }

  targetDate.setHours(hour, minutes, 0, 0);

  return targetDate.getTime();
};
