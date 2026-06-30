import { fail, redirect } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import type { Actions } from './$types';

export const actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();
		const id = data.get('id');
		const password = data.get('password');

		if (!id || !password) {
			return fail(400, { error: 'ID and password are required' });
		}

		if (id === env.ADMIN_ID && password === env.ADMIN_PW) {
			cookies.set('admin_session', 'authenticated', {
				path: '/',
				httpOnly: true,
				sameSite: 'strict',
				secure: process.env.NODE_ENV === 'production',
				maxAge: 60 * 60 * 24 * 7 // 1 week
			});
			throw redirect(303, '/admin');
		}

		return fail(401, { error: 'Invalid credentials' });
	}
} satisfies Actions;
