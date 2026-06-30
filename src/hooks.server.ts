import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const { url, cookies } = event;

	if (url.pathname.startsWith('/admin')) {
		// allow access to login route
		if (url.pathname === '/admin/login') {
			return resolve(event);
		}

		// check for session cookie
		const session = cookies.get('admin_session');
		if (session !== 'authenticated') {
			throw redirect(303, '/admin/login');
		}
	}

	return resolve(event);
};
