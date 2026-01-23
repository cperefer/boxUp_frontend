import { CustomButton } from "@/components/custom/CustomButton"
import { SeeCancelReservationButtons } from "@/components/SeeCancelReservationButtons";
import { useCancelReservation } from "@/hooks/useCancelReservation";
import { useParseDate } from "@/hooks/useParseDate";
import type { ClassColorDictionary, ClassIconDictionary } from "@/interfaces/Classes";
import { IconContext } from "react-icons"
import { FaDumbbell } from "react-icons/fa"
import { FiEye, FiTrash } from "react-icons/fi"
import { GiWeightLiftingUp } from "react-icons/gi";
import { TbRings, TbStarFilled } from "react-icons/tb";

interface Props {
  id: number;
  type: string;
  date: number;
  title?: string;
}

const classColors: ClassColorDictionary = {
  'CrossFit': 'bg-[var(--color-pink-card)]',
  'Haltero': 'bg-[var(--color-navy-card)]',
  'Gymnastics': 'bg-[var(--color-darkgray-card)]',
  'Special': 'bg-[var(--color-yellow-card)]'
}

const classIcons: ClassIconDictionary = {
  'CrossFit': <FaDumbbell />,
  'Haltero': <GiWeightLiftingUp />,
  'Gymnastics': <TbRings />,
  'Special': <TbStarFilled />,
}



export const CardReservationComponent = ({ id, type, date, title }: Props) => {
  return (
    <div className="flex flex-row border-2 border-cyan-100 shadow-md min-h-25 rounded-2xl">
      <div className={`hidden md:flex w-1/3 h-full rounded-l-2xl ${classColors[type]} items-center justify-center`}>
        <IconContext.Provider value={{ color: "white", className: "card-icon" }}>
          <div>
            {
              classIcons[type]
            }
          </div>
        </IconContext.Provider>
        <p className="text-6xl"></p>
      </div>
      <div className="w-full md:w-2/3 flex flex-row">
        <div className="w-4/5 pl-1 flex flex-col justify-evenly items-center">
          <p className="text-lg text-center">{title ?? type}</p>
          <p>
            {useParseDate(date, true)}
          </p>
        </div>
        <div className="flex flex-col justify-evenly pr-2">
          <SeeCancelReservationButtons id={id} date={date} />
        </div>
      </div>
    </div>
  )
}
