<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';

	let { data, form }: { data: PageData, form: { error?: string } | null } = $props();

	const isNew = !data.post;
</script>

<div class="mb-8 flex items-center gap-4">
	<a href="/admin" class="p-2 hover:bg-outline/10 rounded-full transition-colors" aria-label="Back to dashboard">
		<span class="material-symbols-outlined">arrow_back</span>
	</a>
	<h1 class="text-3xl font-bold">{isNew ? 'Create New Post' : 'Edit Post'}</h1>
</div>

<div class="bg-white dark:bg-zinc-800 rounded-2xl shadow-sm border border-outline/20 p-6 sm:p-8">
	{#if form?.error}
		<div class="mb-6 p-4 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-xl text-sm">
			{form.error}
		</div>
	{/if}

	<form method="POST" use:enhance class="space-y-6">
		<div>
			<label for="title" class="block text-sm font-medium mb-2">Title</label>
			<input type="text" id="title" name="title" required value={data.post?.title ?? ''}
				class="w-full px-4 py-3 rounded-xl border border-outline/30 focus:border-primary-container focus:ring-1 focus:ring-primary-container bg-transparent text-lg" />
		</div>
		
		<div>
			<label for="content" class="block text-sm font-medium mb-2">Content (Markdown supported in frontend)</label>
			<textarea id="content" name="content" required rows="15"
				class="w-full px-4 py-3 rounded-xl border border-outline/30 focus:border-primary-container focus:ring-1 focus:ring-primary-container bg-transparent font-mono text-sm leading-relaxed"
			>{data.post?.content ?? ''}</textarea>
		</div>
		
		<div class="flex justify-end pt-4">
			<button type="submit" 
				class="px-8 py-3 bg-primary-container text-on-primary-container hover:bg-primary-container/90 rounded-xl font-medium transition-colors">
				{isNew ? 'Create Post' : 'Save Changes'}
			</button>
		</div>
	</form>
</div>
