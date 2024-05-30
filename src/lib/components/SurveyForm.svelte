<script lang="ts">
	import type { SuperValidated, Infer } from 'sveltekit-superforms';
	import SuperDebug, { superForm } from 'sveltekit-superforms';
	import type { SurveySchema } from '$lib/schemas.js';

	export let data: SuperValidated<SurveySchema>;

	const { form, errors, message, constraints, enhance } = superForm(data, {
		dataType: 'json'
	});
</script>

<SuperDebug data={form} />

{#if $message}<h3>{$message}</h3>{/if}

<form method="POST" use:enhance>
	<div class="flex flex-col">
		<label for="cycle">Cycle</label>
		<input type="text" name="cycle" bind:value={$form.cycle} {...$constraints.cycle} />
		{#if $errors.cycle}<span class="text-red-500">{$errors.cycle}</span>{/if}
	</div>

	<div class="flex flex-col">
		<label for="program">Program</label>
		<input type="program" name="program" bind:value={$form.program} {...$constraints.program} />
		{#if $errors.program}<span class="text-red-500">{$errors.program}</span>{/if}
	</div>

	<div class="flex flex-col">
		<label for="weekday">Weekday</label>
		<input type="weekday" name="weekday" bind:value={$form.weekday} {...$constraints.weekday} />
		{#if $errors.weekday}<span class="text-red-500">{$errors.weekday}</span>{/if}
	</div>

	<div><button>Submit</button></div>
</form>
