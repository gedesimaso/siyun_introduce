<script lang="ts">
	import type { PageData } from './$types';
	import 'highlight.js/styles/github-dark.css';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{data.post.title} - 이시윤 | Writer.</title>
</svelte:head>

<article class="max-w-3xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
	<div class="mb-10">
		<a href="/blog" class="inline-flex items-center gap-2 text-outline hover:text-primary-container transition-colors mb-8">
			<span class="material-symbols-outlined text-sm">arrow_back</span>
			<span>목록으로 돌아가기</span>
		</a>
		
		<time class="text-sm font-medium text-outline block mb-4">
			{new Date(data.post.createdAt).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}
		</time>
		
		<h1 class="text-4xl sm:text-5xl font-bold tracking-tight mb-8 leading-tight">{data.post.title}</h1>
	</div>

	<div class="prose prose-lg dark:prose-invert max-w-none">
		{@html data.post.content}
	</div>
</article>
