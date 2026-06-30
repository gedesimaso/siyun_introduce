<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Blog - 이시윤 | Writer.</title>
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
	<div class="mb-12">
		<a href="/" class="inline-flex items-center gap-2 text-outline hover:text-primary-container transition-colors mb-6">
			<span class="material-symbols-outlined text-sm">arrow_back</span>
			<span>포트폴리오로 돌아가기</span>
		</a>
		<h1 class="text-4xl font-bold tracking-tight mb-4">Blog</h1>
		<p class="text-lg text-outline">제 생각과 글들을 공유하는 공간입니다.</p>
	</div>

	{#if data.posts.length === 0}
		<div class="text-center py-20 bg-surface-container-low dark:bg-zinc-800/50 rounded-2xl border border-outline/10">
			<span class="material-symbols-outlined text-4xl text-outline mb-4 opacity-50">edit_document</span>
			<h2 class="text-xl font-medium text-outline">아직 작성된 글이 없습니다.</h2>
		</div>
	{:else}
		<div class="space-y-8">
			{#each data.posts as post}
				<article class="group block p-6 sm:p-8 bg-white dark:bg-zinc-800 rounded-2xl shadow-sm border border-outline/20 hover:border-primary-container/50 hover:shadow-md transition-all">
					<a href="/blog/{post.id}" class="block">
						<time class="text-sm text-outline block mb-2">
							{new Date(post.createdAt).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}
						</time>
						<h2 class="text-2xl font-bold mb-3 group-hover:text-primary-container transition-colors">{post.title}</h2>
						<p class="text-outline line-clamp-3 leading-relaxed">
							{post.content.slice(0, 150)}{post.content.length > 150 ? '...' : ''}
						</p>
						<div class="mt-6 font-medium text-primary-container inline-flex items-center gap-1 group-hover:gap-2 transition-all">
							자세히 보기 <span class="material-symbols-outlined text-sm">arrow_forward</span>
						</div>
					</a>
				</article>
			{/each}
		</div>
	{/if}
</div>
