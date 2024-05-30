<script lang="ts">
	import type { SuperValidated, Infer } from 'sveltekit-superforms';
	import LoginForm from '$lib/components/LoginForm.svelte';
	import type { LoginSchema } from '$lib/schemas.js';

	export let data: SuperValidated<LoginSchema>;
</script>

<LoginForm {data} />
