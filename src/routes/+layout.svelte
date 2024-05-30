<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import ModeToggle from '$lib/components/ModeToggle.svelte';
	import Menu from 'lucide-svelte/icons/menu';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Sheet from '$lib/components/ui/sheet/index.js';

	import { PUBLIC_VITE_API_URI } from '$env/static/public';
	console.log('Dotenv', import.meta.env.VITE_API_URI);
	console.log('Vite', PUBLIC_VITE_API_URI);

	let { data, children } = $props();

	console.log('Data', data);
</script>

<ModeWatcher />

<main class="m-4">
	<div class="flex flex-row justify-between">
		<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">SPIN Preferences</h1>
		<ModeToggle />
	</div>
	<header class="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
		<nav
			class="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6"
		>
			<a href="/login" class="text-foreground transition-colors hover:text-foreground"> Login </a>
			<a href="/superform" class="text-foreground transition-colors hover:text-foreground">
				Superform
			</a>
			<a href="/survey" class="text-foreground transition-colors hover:text-foreground"> Survey </a>
			<a href="/superform" class="text-muted-foreground transition-colors hover:text-foreground">
				Admin
			</a>
		</nav>
		<Sheet.Root>
			<Sheet.Trigger asChild let:builder>
				<Button variant="outline" size="icon" class="shrink-0 md:hidden" builders={[builder]}>
					<Menu class="h-5 w-5" />
					<span class="sr-only">Toggle navigation menu</span>
				</Button>
			</Sheet.Trigger>
			<Sheet.Content side="left">
				<nav class="grid gap-6 text-lg font-medium">
					<a href="/login" class="hover:text-foreground"> Login </a>
					<a href="/superform" class="hover:text-foreground"> Superform </a>
					<a href="/survey" class="hover:text-foreground"> Survey </a>
					<a href="/superform" class="text-muted-foreground hover:text-foreground"> Admin </a>
				</nav>
			</Sheet.Content>
		</Sheet.Root>
	</header>
	{@render children()}
</main>
