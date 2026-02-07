import { useMembershipData } from "@/hooks/useMembershipData";
import { useAuthStore } from "@/store/authStore";
import { parseDate } from "@/utils/parseDate";
import type { ReactNode } from "react";
import Skeleton from "react-loading-skeleton";

interface Props {
  hasBorder?: boolean;
  hasTitle?: boolean;
}

export const MembershipComponent = ({
  hasBorder = false,
  hasTitle = false,
}: Props) => {
  const { user } = useAuthStore();

  // CADUCAR LA SESION EN ALGUN MOMENTO
  const isNearlyOversubscription = (date: number): ReactNode => {
    const today = new Date().getDate();
    const endDay = new Date(date).getDate();

    if (endDay - today <= 7) {
      return (
        <p className="text-red-500 font-bold">
          Tu suscripción está a punto de caducar
        </p>
      );
    }
  };

  const { data, loading } = useMembershipData(user?.id);

  return (
    <div className="pr-5 pt-2 pb-5">
      <div
        className={`p-2 w-fit ${hasBorder && "border-2 border-primary rounded-lg"}`}
      >
        {hasTitle && <p className="text-xl font-bold">Tu suscripción</p>}
        {loading ? (
          <Skeleton count={4} width={400} />
        ) : (
          <>
            {isNearlyOversubscription(data.validUntil)}
            <p className="">{data.name}</p>
            <p>Clases semanales: {data.weeklyClasses}</p>
            <p>Tu cuota incluye: {data.includes.join(", ")}</p>
            <p>Cuota disponible hasta: {parseDate(data.validUntil)}</p>
          </>
        )}
      </div>
    </div>
  );
};
