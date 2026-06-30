<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<div class="flex justify-between items-center mb-8">
	<h1 class="text-3xl font-bold">Blog Posts</h1>
	<a href="/admin/blog/new" 
		class="px-4 py-2 bg-primary-container text-on-primary-container hover:bg-primary-container/90 rounded-lg font-medium transition-colors">
		New Post
	</a>
</div>

<div class="bg-white dark:bg-zinc-800 rounded-2xl shadow-sm border border-outline/20 overflow-hidden">
	<ul class="divide-y divide-outline/10">
		{#if data.posts.length === 0}
			<li class="p-8 text-center text-outline">No posts found. Create one!</li>
		{:else}
			{#each data.posts as post}
				<li class="p-4 sm:px-6 hover:bg-surface-container-low dark:hover:bg-zinc-700/50 transition-colors flex justify-between items-center group">
					<div>
						<a href="/admin/blog/{post.id}" class="text-lg font-semibold group-hover:text-primary-container transition-colors">
							{post.title}
						</a>
						<div class="text-sm text-outline mt-1">
							{new Date(post.createdAt).toLocaleDateString()}
						</div>
					</div>
					<div class="flex items-center gap-3">
						<a href="/admin/blog/{post.id}" class="text-sm px-3 py-1.5 bg-surface-container-high hover:bg-outline/20 rounded-md transition-colors">
							Edit
						</a>
						<form action="?/delete" method="POST" use:enhance on:submit={(e) => {
							if (!confirm('Are you sure you want to delete this post?')) e.preventDefault();
						}}>
							<input type="hidden" name="id" value={post.id} />
							<button type="submit" class="text-sm px-3 py-1.5 text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/30 rounded-md transition-colors">
								Delete
							</button>
						</form>
					</div>
				</li>
			{/each}
		{/if}
	</ul>
</div>
