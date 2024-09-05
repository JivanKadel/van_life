import { redirect } from 'react-router-dom';

export async function requireAuth(request) {
	const pathname = new URL(request.url).pathname || 'host';
	console.log(pathname);

	const isLoggedIn = localStorage.getItem('loggedIn');
	if (!isLoggedIn) {
		const response = redirect(
			`/login?message=You must log in first.&redirectTo=${pathname}`
		);
		Object.defineProperty(response, 'body', { value: true });
		throw response;
	}
	return null;
}

export async function loginUser(creds) {
	const res = await fetch('/api/login', {
		method: 'post',
		body: JSON.stringify(creds)
	});
	const data = await res.json();
	if (!res.ok) {
		throw {
			message: data.message,
			statusText: res.statusText,
			status: res.status
		};
	}

	return data;
}
