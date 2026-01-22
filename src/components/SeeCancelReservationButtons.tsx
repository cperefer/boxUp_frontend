import React from 'react'
import { FiEye, FiTrash } from 'react-icons/fi'
import { CustomButton } from './custom/CustomButton'
import { useCancelReservation } from '@/hooks/useCancelReservation'

interface Props {
  id: number;
  date: number;
}

const cancelReservationDeadline = 1000 * 10 * 60 * 3

export const SeeCancelReservationButtons = ({ id, date }: Props) => {
  const handleDelete = () => {
    useCancelReservation(id);
  }

  return (
    <>
      <CustomButton type="success" action={() => { }} size='sm'><FiEye /></CustomButton>
      {
        (date - cancelReservationDeadline > Date.now()) && (
          <CustomButton type="error" action={handleDelete} size='sm'><FiTrash /></CustomButton>
        )
      }
    </>
  )
}
