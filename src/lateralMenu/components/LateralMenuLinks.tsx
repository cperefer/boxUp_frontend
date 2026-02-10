import { Link, useLocation } from "react-router"

export const LateralMenuLinks = () => {
  const { pathname } = useLocation();

  return (
    <ul className="pl-2 pt-2 md:pt-5">
      <li className={`mb-2 md:mb-5 ${pathname.includes('dashboard') && 'pl-2 border-l-4'} `} ><Link to='/dashboard'>Dashboard</Link></li>
      <li className={`mb-2 md:mb-5 ${pathname.includes('classes') && 'pl-2 border-l-4'}`}><Link to='/classes'>Clases</Link></li>
      <li className={`mb-2 md:mb-5 ${pathname.includes('reservations') && 'pl-2 border-l-4'}`}><Link to='/reservations'>Reservas</Link></li>
      <li className={`mb-2 md:mb-5 ${pathname.includes('leaderboard') && 'pl-2 border-l-4'}`}><Link to='/leaderboard'>Leaderboard</Link></li>
      <li className={`mb-2 md:mb-5 ${pathname.includes('prs') && 'pl-2 border-l-4'}`}><Link to='/prs'>PRs</Link></li>
    </ul>
  )
}
