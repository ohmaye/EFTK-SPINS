<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Select from '$lib/components/ui/select/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';

	const programs = [
		{
			value: 'General',
			label: 'General'
		},
		{
			value: 'Intensive',
			label: 'Intensive'
		}
	];
	let cycle = '';
	let program = '';
</script>

<Card.Root class="w-[350px]">
	<Card.Header>
		<Card.Title>Create Survey</Card.Title>
		<Card.Description>Create a survey for a specific cycle (Starting Week)</Card.Description>
	</Card.Header>
	<Card.Content>
		<form method="POST" action="?/create">
			<div class="grid w-full items-center gap-4">
				<div class="flex flex-col space-y-1.5">
					<Label for="cycle">Cycle</Label>
					<Input id="cycle" name="cycle" placeholder="Survey for Week" bind:value={cycle} />
				</div>
				<div class="flex flex-col space-y-1.5">
					<Label for="program">Program</Label>
					<select name="program" id="program" bind:value={program}>
						{#each programs as program}
							<option value={program.value} label={program.label}>{program.label}</option>
						{/each}
					</select>
				</div>
			</div>
			<Card.Footer class="flex justify-between">
				<Button variant="outline">Cancel</Button>
				<Button type="submit">Create</Button>
			</Card.Footer>
		</form>
	</Card.Content>
</Card.Root>
