<script lang="ts">
	import ArrowUpRight from 'lucide-svelte/icons/arrow-up-right';
	import Menu from 'lucide-svelte/icons/menu';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import * as Table from '$lib/components/ui/table/index.js';
	import { page } from '$app/stores';

	let { data } = $props();

	console.log('Data @page', data);
	console.log('Page.data', $page.data);
</script>

<div class="flex min-h-screen w-full flex-col">
	<main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
		<div class="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
			<Card.Root class="xl:col-span-2">
				<Card.Header class="flex flex-row items-center">
					<div class="grid gap-2">
						<Card.Title>Surveys per cycle</Card.Title>
						<Card.Description>Recent surveys created.</Card.Description>
					</div>
					<Button href="##" size="sm" class="ml-auto gap-1">
						View All
						<ArrowUpRight class="h-4 w-4" />
					</Button>
				</Card.Header>
				<Card.Content>
					<Table.Root>
						<Table.Header>
							<Table.Row>
								<Table.Head>Cycle</Table.Head>
								<Table.Head class="text-right">Program</Table.Head>
								<Table.Head class="text-right">Weekday</Table.Head>
							</Table.Row>
						</Table.Header>
						<Table.Body>
							<Table.Row>
								<Table.Cell>
									<div class="font-medium">2421</div>
								</Table.Cell>
								<Table.Cell class="text-right">Intensive</Table.Cell>
								<Table.Cell class="text-right">Mon</Table.Cell>
							</Table.Row>
						</Table.Body>
					</Table.Root>
				</Card.Content>
			</Card.Root>
			<Card.Root>
				<Card.Header>
					<Card.Title>Recent Sales</Card.Title>
				</Card.Header>
				<Card.Content class="grid gap-8">
					<div class="flex items-center gap-4">
						<Avatar.Root class="hidden h-9 w-9 sm:flex">
							<Avatar.Image src="" alt="Avatar" />
							<Avatar.Fallback>WK</Avatar.Fallback>
						</Avatar.Root>
						<div class="grid gap-1">
							<p class="text-sm font-medium leading-none">William Kim</p>
							<p class="text-sm text-muted-foreground">will@email.com</p>
						</div>
						<div class="ml-auto font-medium">+$99.00</div>
					</div>
				</Card.Content>
			</Card.Root>
		</div>
	</main>
</div>
