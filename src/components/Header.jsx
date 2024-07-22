import { Link, NavLink } from 'react-router-dom';

export default function Header() {
	return (
		<nav className="navbar">
			<Link to="/">#VANLIFE</Link>
			<div className="links">
				<NavLink
					to="/host"
					className={({ isActive }) => (isActive ? 'active-link' : '')}
				>
					Host
				</NavLink>
				<NavLink
					to="/about"
					className={({ isActive }) => (isActive ? 'active-link' : '')}
				>
					About
				</NavLink>
				<NavLink
					to="/vans"
					className={({ isActive }) => (isActive ? 'active-link' : '')}
				>
					Vans
				</NavLink>
			</div>
		</nav>
	);
}
