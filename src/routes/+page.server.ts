import { db } from '$lib/server/db';
import { posts } from '$lib/server/db/schema';
import { desc } from 'drizzle-orm';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	// Fetch the 3 most recent posts
	const recentPosts = await db.select().from(posts).orderBy(desc(posts.createdAt)).limit(3);
	return {
		recentPosts
	};
};
