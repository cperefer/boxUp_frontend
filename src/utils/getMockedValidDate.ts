export const getMockedValidDate = (when: string = "", midnight = false) => {
  const now = new Date();
  let targetDate = new Date(now);
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

  if (when === "month") {
    targetDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  }

  if (midnight || when === "month") {
    targetDate.setHours(0, 0, 0, 0);
  } else {
    targetDate.setHours(hour, minutes, 0, 0);
  }

  return targetDate.getTime();
};
