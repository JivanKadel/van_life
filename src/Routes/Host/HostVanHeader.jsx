import {
	NavLink,
	Outlet,
	useLoaderData
	//  useParams
} from 'react-router-dom';
import HostVan from './HostVan';
// import { useEffect, useState } from 'react';
import { getHostVans } from '../../utils/api';
import { requireAuth } from '../../utils/utils';

export async function loader({ params, request }) {
	await requireAuth(request);
	return getHostVans(params.id);
}
export default function HostVanHeader() {
	const van = useLoaderData();
	return (
		<div>
			<HostVan props={{ van }} />
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
