<script lang="ts">
	import { enhance } from '$app/forms';
	let { children } = $props();
</script>

<div class="min-h-screen bg-surface-bright text-inverse-surface dark:bg-inverse-surface dark:text-inverse-on-surface">
	<header class="bg-white dark:bg-zinc-800 border-b border-outline/20 sticky top-0 z-10">
		<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
			<a href="/admin" class="font-bold text-lg hover:text-primary-container transition-colors">Admin Dashboard</a>
			
			<div class="flex items-center gap-4">
				<a href="/" class="text-sm hover:underline underline-offset-4 opacity-70 hover:opacity-100">View Site</a>
				<form action="/admin/logout" method="POST" use:enhance>
					<button type="submit" class="text-sm px-3 py-1.5 rounded-md hover:bg-outline/10 transition-colors">
						Logout
					</button>
				</form>
			</div>
		</div>
	</header>

	<main class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
		{@render children()}
	</main>
</div>
