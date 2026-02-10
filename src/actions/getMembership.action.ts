import type { Membership } from "@/interfaces/Membership";
import { DemoMembershipMock, MembershipMock } from "@/mocks/Membership.mock";

interface MembershipResponse {
  membership: Membership;
}

export const getMembershipAction = async (
  id: string,
): Promise<MembershipResponse> => {
  await new Promise((res) => setTimeout(res, 500));

  if (id !== "0" && id !== "99") {
    throw new Error("membership not found");
  }

  const data = {
    membership: id === "99" ? DemoMembershipMock : MembershipMock,
  };

  return data;
};
