<script lang="ts">
	import SuperDebug, { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { Button } from '$lib/components/ui/button';
	import { schema } from '$lib/forms/schema';

	export let data;

	// Client API:
	const { form, errors, constraints, message, enhance } = superForm(data.form, {
		validators: zodClient(schema)
	});
</script>

{#if $message}<h3>{$message}</h3>{/if}
<SuperDebug data={form} />
<form method="POST" use:enhance>
	<label for="name">Name</label>
	<input type="text" name="name" bind:value={$form.name} {...$constraints.name} />
	{#if $errors.name}<span class="invalid">{$errors.name}</span>{/if}

	<label for="email">E-mail</label>
	<input type="email" name="email" bind:value={$form.email} {...$constraints.email} />
	{#if $errors.email}<span class="invalid">{$errors.email}</span>{/if}

	<div><button>Submit</button></div>
</form>

<style>
	.invalid {
		color: red;
	}
</style>
