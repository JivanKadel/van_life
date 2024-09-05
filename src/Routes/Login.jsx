/* eslint-disable react-refresh/only-export-components */
// import { useState } from 'react';
import {
	Form,
	redirect,
	useActionData,
	useLoaderData,
	useNavigation
} from 'react-router-dom';
import { loginUser } from '../utils/utils';

export async function loader({ request }) {
	const url = new URL(request.url);
	const message = url.searchParams.get('message');
	return message;
}

export async function action({ request }) {
	const formData = await request.formData();
	const email = formData.get('email');
	const password = formData.get('password');

	const pathname =
		new URL(request.url).searchParams.get('redirectTo') || '/host';
	try {
		// eslint-disable-next-line no-unused-vars
		const data = await loginUser({ email, password });
		localStorage.setItem('loggedIn', true);
		const response = redirect(pathname);
		response.body = true;
		return response;
	} catch (err) {
		return err.message;
	}
}

export default function Login() {
	const message = useLoaderData();
	const errorMessage = useActionData();
	const navigation = useNavigation();
	// const [status, setStatus] = useState('idle');

	return (
		<div className="login-container">
			<h1>Sign in to your account</h1>
			{message && (
				<h3 style={{ textAlign: 'center', color: '#cc0000' }}>{message}</h3>
			)}
			<Form method="post" replace>
				<input
					type="text"
					name="email"
					id="email"
					placeholder="Email address"
				/>
				<input
					type="text"
					name="password"
					id="password"
					placeholder="Password"
				/>
				{errorMessage && (
					<span style={{ textAlign: 'center', color: '#ff0033' }}>
						{errorMessage}
					</span>
				)}
				<button type="submit" disabled={navigation.state === 'submitting'}>
					{navigation.state === 'submitting' ? 'Logging in...' : 'Log in'}
				</button>
			</Form>
		</div>
	);
}
