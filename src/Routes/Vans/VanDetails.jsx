import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function VanDetails() {
	const [van, setVan] = useState(null);
	const { id } = useParams();
	useEffect(() => {
		fetch(`/api/vans/${id}`)
			.then((res) => res.json())
			.then((data) => setVan(data.vans));
	}, [id]);

	return van ? (
		<main className="van-main van-details-page">
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
	) : (
		<h2>Loading...</h2>
	);
}
