import type { Membership } from "@/interfaces/Membership";
import { MembershipMock } from "@/mocks/Membership.mock";

interface MembershipResponse {
  membership: Membership;
}

export const getMembershipAction = async (id: string):Promise<MembershipResponse> => {
  await new Promise((res) => setTimeout(res, 500));
  
  const data = {
   membership: MembershipMock,
  }

  return data;
}