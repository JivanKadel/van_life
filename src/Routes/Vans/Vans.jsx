import {
	Suspense,
	// useEffect, useMemo,
	useState
} from 'react';
import {
	Await,
	defer,
	Link,
	useLoaderData,
	useSearchParams
} from 'react-router-dom';
import getVans from '../../utils/api';

export function loader() {
	// return getVans();
	return defer({ vans: getVans() });
}

export default function Vans() {
	const [error, setError] = useState(null);
	const [params, setParams] = useSearchParams();
	const vansPromise = useLoaderData();

	const typeFilter = params.get('type');

	// const displayedVans = typeFilter
	// 	? vans.filter((van) => van.type.toLowerCase() === typeFilter)
	// 	: vans;

	if (error) {
		return <h1 aria-live="assertive">There was an error : {error.message}</h1>;
	}
	function renderVans(vans) {
		const displayedVans = typeFilter
			? vans.filter((van) => van.type.toLowerCase() === typeFilter)
			: vans;

		const vansElm = displayedVans.map((van) => (
			<Link
				key={van.id}
				to={van.id}
				aria-label={`View details for ${van.name}, 
                             priced at $${van.price} per day`}
				state={{ filter: params.toString(), type: typeFilter }}
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
		));

		return (
			<>
				<div className="filters">
					{/* <Link to="?type=simple">Simple</Link>
				<Link to="?type=rugged">Rugged</Link>
				<Link to="?type=luxury">Luxury</Link>
				<Link to="." className="clear-filter">
					Clear filters
				</Link> */}
					<button
						onClick={() => setParams({ type: 'simple' })}
						style={{
							backgroundColor: typeFilter == 'simple' ? `var(--simple)` : '',
							color: typeFilter == 'simple' ? 'white' : ''
						}}
					>
						Simple
					</button>
					<button
						onClick={() => setParams({ type: 'luxury' })}
						style={{
							backgroundColor: typeFilter == 'luxury' ? `var(--luxury)` : '',
							color: typeFilter == 'luxury' ? 'white' : ''
						}}
					>
						Luxury
					</button>
					<button
						onClick={() => setParams({ type: 'rugged' })}
						style={{
							backgroundColor: typeFilter == 'rugged' ? `var(--rugged)` : '',
							color: typeFilter == 'rugged' ? 'white' : ''
						}}
					>
						Rugged
					</button>
					{typeFilter && (
						<button onClick={() => setParams({})} className="clear-filter">
							Clear filters
						</button>
					)}
				</div>
				<main className="vans-main">{displayedVans.length > 0 && vansElm}</main>
			</>
		);
	}

	return (
		<>
			<Suspense
				fallback={<h1 style={{ textAlign: 'center' }}>Loading vans...</h1>}
			>
				<h1 className="van-options">Explore our van options</h1>
				<Await resolve={vansPromise.vans}>{renderVans}</Await>
			</Suspense>
		</>
	);
}
