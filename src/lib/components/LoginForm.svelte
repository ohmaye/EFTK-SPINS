<script lang="ts">
	import type { SuperValidated, Infer } from 'sveltekit-superforms';
	import SuperDebug, { superForm } from 'sveltekit-superforms';
	import type { LoginSchema } from '$lib/schemas.js';

	export let data: SuperValidated<LoginSchema>;

	const { form, errors, message, constraints, enhance } = superForm(data, {
		dataType: 'json'
	});
</script>

<SuperDebug data={form} />

{#if $message}<h3>{$message}</h3>{/if}

<form method="POST" use:enhance>
	<div class="flex flex-col">
		<label for="name">Name</label>
		<input type="text" name="name" bind:value={$form.name} {...$constraints.name} />
		{#if $errors.name}<span class="text-red-500">{$errors.name}</span>{/if}
	</div>

	<div class="flex flex-col">
		<label for="email">E-mail</label>
		<input type="email" name="email" bind:value={$form.email} {...$constraints.email} />
		{#if $errors.email}<span class="text-red-500">{$errors.email}</span>{/if}
	</div>

	<div><button>Submit</button></div>
</form>
