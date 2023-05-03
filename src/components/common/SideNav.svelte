<script lang="ts">
	import { slide } from 'svelte/transition';
	import Icon, { Icons } from './Icon.svelte';
	import Link from './Link.svelte';

	export let open: boolean = false;

	function toggleOpen() {
		open = !open;
	}
	function close() {
		open = false;
	}
</script>

<button
	class="fixed bottom-4 left-4 z-20 h-16 w-16 rounded-2xl bg-red-900 bg-opacity-50 hover:bg-opacity-100 p-3"
	on:click={toggleOpen}><Icon iconName={open ? Icons.closeMenu : Icons.menu} /></button
>
{#if open}
	<ul
		transition:slide
		class="flex flex-col gap-2 text-xl fixed left-0 bottom-0 p-4 h-[50vh] w-[50vw] z-10 bg-red-900 bg-opacity-95 rounded-tr-2xl"
	>
		<li>
			<button on:click={toggleOpen}>
				<Link href="/#hero">Top</Link>
			</button>
		</li>
		<li>
			<button on:click={toggleOpen}>
				<Link href="/#skills">Skills</Link>
			</button>
		</li>
		<li>
			<button on:click={toggleOpen}>
				<Link href="/#blog">Writing</Link>
			</button>
		</li>
		<li>
			<button on:click={toggleOpen}>
				<Link href="/#projects">Projects</Link>
			</button>
		</li>
		<li>
			<button on:click={toggleOpen}>
				<Link href="/#interests">Hobbies</Link>
			</button>
		</li>
		<li>
			<button on:click={toggleOpen}>
				<Link href="/#contact">Contact me</Link>
			</button>
		</li>
	</ul>
{/if}
