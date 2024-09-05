// import { useState } from 'react';
// import { useEffect } from 'react';
import { Await, defer, Link, useLoaderData } from 'react-router-dom';
import { getHostVans } from '../../utils/api';
import { requireAuth } from '../../utils/utils';
import { Suspense } from 'react';

export async function loader({ request }) {
	await requireAuth(request);
	return defer({ hostVans: getHostVans() });
}

export default function Vans() {
	const vansPromise = useLoaderData();

	function displayVans(vans) {
		return (
			<main className="host-vans-main">
				{vans.length > 0 &&
					vans.map((van) => (
						<Link
							key={van.id}
							to={van.id}
							aria-label={`View details for ${van.name},
							 priced at $${van.price} per day`}
						>
							<div className="host-van-card">
								<img src={van.imageUrl} alt={`Image of ${van.name}`} />
								<div className="info">
									<p className="host-van-info">
										<span className="host-name">{van.name}</span>
										<span className="host-price">{van.price}/day</span>
									</p>
								</div>
							</div>
						</Link>
					))}
			</main>
		);
	}
	return (
		<>
			<Suspense
				fallback={<h2 style={{ textAlign: 'center' }}>Loading vans...</h2>}
			>
				<h1 className="van-options">Your listed vans</h1>
				<Await
					resolve={vansPromise.hostVans}
					errorElement={<h1>Failed to load vans..</h1>}
				>
					{displayVans}
				</Await>
			</Suspense>
		</>
	);
}
