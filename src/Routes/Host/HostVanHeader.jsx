import { NavLink, Outlet, useParams } from 'react-router-dom';
import HostVan from './HostVan';
import { useEffect, useState } from 'react';

export default function HostVanHeader() {
	const [van, setVan] = useState([]);
	const { id } = useParams();
	useEffect(() => {
		fetch(`/api/vans/${id}`)
			.then((res) => res.json())
			.then((data) => setVan(data.vans));
	}, [id]);
	return (
		<div>
			<HostVan props={{ van, setVan }} />
			<HostVanNav />
			<Outlet context={{ van }} />
		</div>
	);
}

function HostVanNav() {
	return (
		<nav className="host-van-detail-nav">
			<NavLink
				to="."
				end
				className={({ isActive }) => (isActive ? 'active-host-link' : '')}
			>
				Details
			</NavLink>
			<NavLink
				to="pricing"
				className={({ isActive }) => (isActive ? 'active-host-link' : '')}
			>
				Pricing
			</NavLink>
			<NavLink
				to="photo"
				className={({ isActive }) => (isActive ? 'active-host-link' : '')}
			>
				Photos
			</NavLink>
		</nav>
	);
}
