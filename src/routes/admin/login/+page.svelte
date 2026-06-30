<script lang="ts">
	import { enhance } from '$app/forms';

	let { form }: { form: { error?: string } | null } = $props();
</script>

<div class="min-h-screen flex items-center justify-center bg-surface-bright text-inverse-surface dark:bg-inverse-surface dark:text-inverse-on-surface">
	<div class="max-w-[400px] w-full p-8 bg-white dark:bg-zinc-800 rounded-2xl shadow-lg border border-outline/20">
		<h1 class="text-2xl font-bold mb-6 text-center">Admin Login</h1>
		
		{#if form?.error}
			<div class="mb-4 p-3 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-lg text-sm text-center">
				{form.error}
			</div>
		{/if}

		<form method="POST" use:enhance class="space-y-4">
			<div>
				<label for="id" class="block text-sm font-medium mb-1">ID</label>
				<input type="text" id="id" name="id" required 
					class="w-full px-4 py-2 rounded-lg border border-outline/30 focus:border-primary-container focus:ring-1 focus:ring-primary-container bg-transparent" />
			</div>
			
			<div>
				<label for="password" class="block text-sm font-medium mb-1">Password</label>
				<input type="password" id="password" name="password" required 
					class="w-full px-4 py-2 rounded-lg border border-outline/30 focus:border-primary-container focus:ring-1 focus:ring-primary-container bg-transparent" />
			</div>
			
			<button type="submit" 
				class="w-full py-2 px-4 bg-primary-container text-on-primary-container hover:bg-primary-container/90 rounded-lg font-medium transition-colors">
				Login
			</button>
		</form>
	</div>
</div>
