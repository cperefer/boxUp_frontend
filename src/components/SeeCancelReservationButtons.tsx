import { FiEye, FiTrash } from 'react-icons/fi'
import { CustomButton } from './custom/CustomButton'
import { useCancelReservation } from '@/hooks/useCancelReservation'
import { useNavigate } from 'react-router';

interface Props {
  id: number;
  date: number;
}

const cancelReservationDeadline = 1000 * 10 * 60 * 3

export const SeeCancelReservationButtons = ({ id, date }: Props) => {
  const navigate = useNavigate();
  const handleDelete = () => {
    useCancelReservation(id);
  }

  return (
    <>
      <CustomButton type="success" action={() => navigate(`/classes/${id}`)} size='sm'><FiEye /></CustomButton>
      {
        (date - cancelReservationDeadline > Date.now()) && (
          <CustomButton type="error" action={handleDelete} size='sm'><FiTrash /></CustomButton>
        )
      }
    </>
  )
}
