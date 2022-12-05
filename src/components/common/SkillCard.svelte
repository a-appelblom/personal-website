<script lang="ts">
	import HoverInfo from './HoverInfo.svelte';

	export let title: string;
	export let info: string[] | undefined = undefined;
</script>

<div class="group my-8 flex flex-col gap-4 items-center min-w-fit shadow-xl shadow-slate-800 p-2">
	<p class="w-full text-center font-bold">{title}</p>
	<div class="h-16">
		<slot name="icon" />
	</div>
	{#if info}
		<HoverInfo text={info} />
	{/if}
</div>
