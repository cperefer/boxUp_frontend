import { getMembershipAction } from "@/actions/getMembership.action";
import type { Membership } from "@/interfaces/Membership";
import { useEffect, useState } from "react";

export const useMembershipData = (id: string = "") => {
  const [data, setData] = useState<Membership>({
    id: "",
    includes: [],
    isActive: false,
    name: "",
    validUntil: 0,
    weeklyClasses: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      return;
    }

    const loadData = async () => {
      setLoading(true);

      const { membership } = await getMembershipAction(id);
      setData(membership);

      setLoading(false);
    };

    loadData();
  }, [id]);

  return {
    data,
    loading,
  };
};
