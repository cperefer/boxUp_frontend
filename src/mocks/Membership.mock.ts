import type { Membership } from "@/interfaces/Membership";
import { getMockedValidDate } from "@/utils/getMockedValidDate";

export const MembershipMock: Membership = {
  id: "1",
  isActive: true,
  name: "Cuota ilimitada",
  validUntil: 1769900340000,
  weeklyClasses: 5,
  includes: ["CrossFit", "Endurance", "Gymnastics", "Haltero", "Special"],
};

export const DemoMembershipMock: Membership = {
  id: "2",
  isActive: true,
  name: "Cuota ilimitada",
  validUntil: getMockedValidDate("month"),
  weeklyClasses: 5,
  includes: ["CrossFit", "Endurance", "Gymnastics", "Haltero", "Special"],
};
