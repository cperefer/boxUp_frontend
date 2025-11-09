import type { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  type: string;
  size?: string;
  action: () => void;
}

interface Dictionary {
  [type: string]: string;
}

const colors: Dictionary = {
  'caution': 'bg-amber-500 text-white',
  'info': 'bg-indigo-500 text-white',
  'error': 'bg-error text-black',
  'success': 'bg-ok text-black',
}

const variant: Dictionary = {
  'sm': 'w-12 h-10',
  'md': 'w-45 h-10',
}

export const Button = ({ action, children, type, size = 'md' }: Props) => {
  return (
    <>
      <p
        className={`${colors[type]} ${variant[size]} rounded-lg p-2 cursor-pointer flex justify-center items-center`}
        onClick={action}
      >
        {children}
      </p>
    </>
  )
}
