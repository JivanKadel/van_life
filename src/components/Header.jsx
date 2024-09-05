import { Link, NavLink } from 'react-router-dom';

export default function Header() {
	function fakeLogOut() {
		localStorage.removeItem('loggedIn');
	}
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
				<Link to="/login">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="white"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="black"
						className="size-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
						/>
					</svg>
				</Link>
				<button onClick={fakeLogOut}>X</button>
			</div>
		</nav>
	);
}
