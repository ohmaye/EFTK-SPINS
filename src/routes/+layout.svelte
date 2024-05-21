<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import ModeToggle from '$lib/components/ModeToggle.svelte';
	import { Button } from '$lib/components/ui/button';

	import { PUBLIC_VITE_API_URI } from '$env/static/public';
	console.log('Dotenv', import.meta.env.VITE_API_URI);
	console.log('Vite', PUBLIC_VITE_API_URI);
</script>

<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">SPIN Preferences</h1>
<ModeWatcher />
<ModeToggle />
<slot></slot>
<slot name="Create"><Button href="/create">Create Survey</Button></slot>
<slot name="Create"><Button href="/login">Login</Button></slot>

<style></style>
