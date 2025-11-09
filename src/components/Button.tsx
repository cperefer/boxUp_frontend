import type { PropsWithChildren } from "react";
import { Link } from "react-router"

interface Props extends PropsWithChildren {
  type: string;
  action: string;
}

interface Colors {
  [type: string]: string;
}

const colors: Colors = {
  'caution': 'bg-amber-500 text-white',
  'info': 'bg-indigo-500 text-white',
  'error': 'bg-error text-white',
  'success': 'bg-ok text-white',
}

export const Button = ({ action, children, type }: Props) => {
  return (
    <div className="text-center">
      <p className={`${colors[type]} inline-block rounded-md p-2`}>
        <Link to={action}>{children}</Link>
      </p>
    </div>
  )
}
