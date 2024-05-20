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
</script>

<Card.Root class="w-[350px]">
	<Card.Header>
		<Card.Title>Create Survey</Card.Title>
		<Card.Description>Create a survey for a specific cycle (Starting Week)</Card.Description>
	</Card.Header>
	<Card.Content>
		<form>
			<div class="grid w-full items-center gap-4">
				<div class="flex flex-col space-y-1.5">
					<Label for="cycle">Cycle</Label>
					<Input id="cycle" placeholder="Survey for Week" />
				</div>
				<div class="flex flex-col space-y-1.5">
					<Label for="program">Program</Label>
					<Select.Root>
						<Select.Trigger id="program">
							<Select.Value placeholder="Select" />
						</Select.Trigger>
						<Select.Content>
							{#each programs as program}
								<Select.Item value={program.value} label={program.label}
									>{program.label}</Select.Item
								>
							{/each}
						</Select.Content>
					</Select.Root>
				</div>
			</div>
		</form>
	</Card.Content>
	<Card.Footer class="flex justify-between">
		<Button variant="outline">Cancel</Button>
		<Button>Create</Button>
	</Card.Footer>
</Card.Root>
