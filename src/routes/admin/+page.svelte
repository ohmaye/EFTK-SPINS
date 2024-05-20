<script lang="ts">
	import { weekdays } from '$lib/constants';

	let cycle = $state('Cycle');
	let program = $state('Program');
	let weekday = $state('Weekday');

	function handleSubmit(event) {
		event.preventDefault();
		console.log({ cycle, program, weekday });
	}
</script>

<h1>Create Survey</h1>

<form on:submit|preventDefault={handleSubmit}>
	<label for="cycle">Cycle</label>
	<input class="border-2 border-s-amber-200" type="text" id="cycle" bind:value={cycle} />
	<br />

	<label for="program">Program</label>
	<select id="program" bind:value={program} class="border-2 border-s-amber-200">
		<option value="Intensive">Intensive</option>
		<option value="General">General</option>
	</select>
	<br />

	<label for="weekday">Weekday</label>
	<select id="weekday" bind:value={weekday}>
		{#each weekdays as day}
			<option value={day}>{day}</option>
		{/each}
	</select>
	<br />

	<button type="submit">Create</button>
</form>
