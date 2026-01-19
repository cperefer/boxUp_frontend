import { getReservationsAction } from '@/actions/getReservations.action';
import type { Reservation } from '@/interfaces/Classes';
import { useEffect, useState } from 'react';

export const useReservations = (id: string) => {
  const [data, setData] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) {
      return;
    }

    const loadData = async () => {
      setLoading(true)
      const result = await getReservationsAction(id);
      setData(result.reservations);
      setLoading(false)
    };

    loadData();
  }, [id])

  return {
    data,
    loading
  };
}
