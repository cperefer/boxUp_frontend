import type { PropsWithChildren } from "react";

type ButtonType = 'caution' | 'info' | 'auth' | 'error' | 'success';

interface Props extends PropsWithChildren {
  type: ButtonType;
  size?: string;
  disabled?: boolean
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

export const CustomButton = ({ action, children, type, size = 'md', disabled = false }: Props) => {
  return (
    <>
      <button
        className={`${variant[type]} ${variant[size]} rounded-lg p-2 cursor-pointer flex justify-center items-center ${disabled ? 'bg-gray-400 opacity-70' : ''}`}
        disabled={disabled}
        onClick={action}
      >
        {
          // sustituir por un spinner
          disabled ? 'Enviando...' : children
        }
      </button>
    </>
  )
}
