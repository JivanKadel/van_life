import { Link } from 'react-router-dom';

export default function FourOFour() {
	return (
		<div
			style={{
				height: '75vh',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center'
			}}
		>
			<h1
				style={{
					textAlign: 'center',
					fontSize: '6rem',
					marginBottom: '1rem',
					fontWeight: 'bolder'
				}}
			>
				404
			</h1>
			<h2 style={{ textAlign: 'center', marginTop: 0, fontSize: '1.8rem' }}>
				Sorry, the page you were looking was not found
			</h2>
			<Link
				to="/"
				style={{
					fontSize: '1.4rem',
					background: 'black',
					color: 'white',
					width: '80%',
					textAlign: 'center',
					padding: '0.5rem',
					textDecoration: 'none',
					marginTop: '2rem'
				}}
			>
				Return home
			</Link>
		</div>
	);
}
