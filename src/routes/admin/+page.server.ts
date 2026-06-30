import { db } from '$lib/server/db';
import { posts } from '$lib/server/db/schema';
import { desc, eq } from 'drizzle-orm';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async () => {
	const allPosts = await db.select().from(posts).orderBy(desc(posts.createdAt));
	return {
		posts: allPosts
	};
};

export const actions = {
	delete: async ({ request }) => {
		const data = await request.formData();
		const id = data.get('id') as string;

		if (id) {
			await db.delete(posts).where(eq(posts.id, id));
		}
		
		return { success: true };
	}
} satisfies Actions;
