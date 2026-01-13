import type { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  type: string;
  size?: string;
  action: () => void;
}

interface Dictionary {
  [type: string]: string;
}

const variant: Dictionary = {
  'caution': 'bg-amber-500 text-white',
  'info': 'bg-indigo-500 text-white',
  'auth': 'bg-black text-white',
  'error': 'bg-error text-black',
  'success': 'bg-ok text-black',
  'sm': 'w-12 h-10',
  'md': 'w-45 h-10',
  'fit': 'w-full h-10'
}

export const CustomButton = ({ action, children, type, size = 'md' }: Props) => {
  return (
    <>
      <p
        className={`${variant[type]} ${variant[size]} rounded-lg p-2 cursor-pointer flex justify-center items-center`}
        onClick={action}
      >
        {children}
      </p>
    </>
  )
}
