import { useMembershipData } from "@/hooks/useMembershipData";
import { useParseDate } from "@/hooks/useParseDate";
import { useAuthStore } from "@/store/authStore";
import Skeleton from "react-loading-skeleton";

export const MembershipComponent = () => {
  const { user } = useAuthStore();

  if (!user) {
    return;
  }

  const { data, loading } = useMembershipData(user?.id);

  return (
    <div className="pr-5 pt-2 pb-5">
      <div className="p-2 w-fit border-2 border-primary rounded-lg">
        <p className="text-xl font-bold">Tu suscripción</p>
        {
          loading ? (
            <Skeleton count={4} width={400} />
          ) : (
            <>
              <p className="">{data.name}</p>
              <p>Clases semanales: {data.weeklyClasses}</p>
              <p>Tu cuota incluye: {data.includes.join(', ')}</p>
              <p>Cuota disponible hasta: {useParseDate(data.validUntil)}</p>
            </>
          )
        }

      </div>
    </div>
  )
}
