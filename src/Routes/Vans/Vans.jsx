import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Vans() {
	const [vans, setVans] = useState([]);

	useEffect(() => {
		fetch('/api/vans')
			.then((res) => res.json())
			.then((data) => setVans(data.vans));
	}, []);

	// const bgColor = console.log(vans);
	return (
		<>
			<h1 className="van-options">Explore our van options</h1>
			<main className="vans-main">
				{vans.length > 0 &&
					vans.map((van) => (
						<Link
							key={van.id}
							to={`/vans/${van.id}`}
							aria-label={`View details for ${van.name}, 
                             priced at $${van.price} per day`}
						>
							<div className="van-card">
								<img src={van.imageUrl} alt={`Image of ${van.name}`} />
								<p className="van-info">
									<span className="name">{van.name}</span>
									<span className="price">{van.price}/day</span>
								</p>
								<p
									className="van-type"
									style={{ backgroundColor: `var(--${van.type})` }}
								>
									{van.type}
								</p>
							</div>
						</Link>
					))}
			</main>
		</>
	);
}
