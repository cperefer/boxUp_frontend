export const isSessionExpired = (expiresAt: number, now: number): boolean =>
  // 2 horas
  now - Number(expiresAt) > 1000 * 60 * 60 * 2;
