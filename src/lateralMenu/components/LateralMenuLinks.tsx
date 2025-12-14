import { Link } from "react-router"

export const LateralMenuLinks = () => {
  return (
    <ul className="pl-2 pt-2 md:pt-5">
      <li className="mb-2 md:mb-5 pl-2 border-l-4"><Link to='/'>Dashboard</Link></li>
      <li className="mb-2 md:mb-5"><Link to='/'>Clases</Link></li>
      <li className="mb-2 md:mb-5"><Link to='/'>Reservas</Link></li>
      <li className="mb-2 md:mb-5"><Link to='/'>Leaderboard</Link></li>
      <li className="mb-2 md:mb-5"><Link to='/'>PRs</Link></li>
    </ul>
  )
}
