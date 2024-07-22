import { useState } from 'react';
import { useEffect } from 'react';
// import React from 'react';
import { Link } from 'react-router-dom';
export default function Vans() {
	const [vans, setVans] = useState([]);
	useEffect(() => {
		fetch('/api/vans')
			.then((res) => res.json())
			.then((data) => setVans(data.vans.slice(0, 3)));
	}, []);

	return (
		<>
			<h1 className="van-options">Your listed vans</h1>
			<main className="host-vans-main">
				{vans.length > 0 &&
					vans.map((van) => (
						<Link
							key={van.id}
							to={`/host/vans/${van.id}`}
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
		</>
	);
}
