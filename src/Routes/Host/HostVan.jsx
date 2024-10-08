// import { useEffect, useState } from 'react';
import {
	Link
	//  useParams
} from 'react-router-dom';

export default function HostVan({ props }) {
	const { van } = props;
	return (
		<main className="host-van-detail">
			<Link to=".." relative="path" className="back-button">
				&larr; <span>Back to all vans</span>
			</Link>
			<div>
				<img
					src={van.imageUrl}
					alt={`${van.name}`}
					className="host-van-detail-img"
				/>
				<div className="host-type-price">
					<p
						className="van-type"
						style={{ backgroundColor: `var(--${van.type})` }}
					>
						{van.type}
					</p>
					<p className="host-van-name-price">
						<span>{van.name}</span>
						<span className="host-van-price">
							<span>${van.price}</span>
							<span>/day</span>
						</span>
					</p>
				</div>
			</div>
		</main>
	);
}
