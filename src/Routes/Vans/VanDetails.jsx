// import { useEffect, useState } from 'react';
import {
	Link,
	useLoaderData,
	useLocation
	// useParams
} from 'react-router-dom';
import getVans from './../../utils/api';
// import { requireAuth } from '../../utils/utils';

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }) {
	// await requireAuth();
	return getVans(params.id);
}

export default function VanDetails() {
	const van = useLoaderData();

	const filter = useLocation().state?.filter || '';

	const type = useLocation().state?.type || 'all';

	return (
		<main className="van-main van-details-page">
			<Link to={`..?${filter}`} relative="path" className="back-button">
				&larr; <span>Back to {type} vans</span>
			</Link>
			<div className="van-details-card">
				<img src={van.imageUrl} alt="" className="van-image" />
				<p
					className="van-type"
					style={{ backgroundColor: `var(--${van.type})` }}
				>
					{van.type}
				</p>
				<p className="van-name">{van.name}</p>
				<p className="van-price">{van.price}/day</p>
				<p className="van-desc">{van.description}</p>
				<button className="rent-van-btn">Rent this van</button>
			</div>
		</main>
	);
}
