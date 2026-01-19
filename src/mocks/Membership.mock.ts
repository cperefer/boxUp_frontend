import type { Membership } from "@/interfaces/Membership";

export const MembershipMock: Membership = {
  id: '1',
  isActive: true,
  name: 'Cuota ilimitada',
  validUntil: 1769900340000,
  weeklyClasses: 5,
  includes: ['CrossFit', 'Endurance', 'Gymnastics', 'Haltero', 'Special']
}