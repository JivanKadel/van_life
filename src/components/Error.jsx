import { useRouteError } from 'react-router-dom';

export default function Error() {
	const error = useRouteError();
	console.log(error);
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				gap: '1.5rem',
				minHeight: '75vh'
			}}
		>
			<h1 style={{ margin: 0, fontSize: '3rem' }}>Error : {error.message}</h1>
			<pre style={{ fontSize: '2rem' }}>
				{error.status} - {error.statusText}
			</pre>
		</div>
	);
}
