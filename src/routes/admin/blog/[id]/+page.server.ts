import { db } from '$lib/server/db';
import { posts } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	if (params.id === 'new') {
		return { post: null };
	}

	const [post] = await db.select().from(posts).where(eq(posts.id, params.id));
	
	if (!post) {
		throw error(404, 'Post not found');
	}

	return { post };
};

export const actions = {
	default: async ({ request, params }) => {
		const data = await request.formData();
		const title = data.get('title') as string;
		const content = data.get('content') as string;

		if (!title || !content) {
			return { error: 'Title and content are required' };
		}

		if (params.id === 'new') {
			await db.insert(posts).values({
				title,
				content,
			});
		} else {
			await db.update(posts)
				.set({ title, content, updatedAt: new Date() })
				.where(eq(posts.id, params.id));
		}

		throw redirect(303, '/admin');
	}
} satisfies Actions;
