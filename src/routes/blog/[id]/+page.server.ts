import { db } from '$lib/server/db';
import { posts } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import hljs from 'highlight.js';

export const load: PageServerLoad = async ({ params }) => {
	const [post] = await db.select().from(posts).where(eq(posts.id, params.id));
	
	if (!post) {
		throw error(404, 'Post not found');
	}

	const marked = new Marked(
		markedHighlight({
			langPrefix: 'hljs language-',
			highlight(code, lang) {
				const language = hljs.getLanguage(lang) ? lang : 'plaintext';
				return hljs.highlight(code, { language }).value;
			}
		})
	);

	const parsedContent = await marked.parse(post.content);

	return { 
		post: {
			...post,
			content: parsedContent
		}
	};
};
