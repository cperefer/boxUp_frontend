const sizes = {
  'sm': 'w-15 h-15',
  'md': 'w-25 h-25'
}

type Size = keyof typeof sizes;

interface Props {
  size?: Size;
}


export const CustomProfilePicture = ({ size = 'md' }: Props) => {

  return (
    <div className={`${sizes[size]} rounded-full bg-amber-300 my-3`}>
    </div>
  )
}
