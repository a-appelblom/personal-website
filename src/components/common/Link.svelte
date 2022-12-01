<script lang="ts">
	export let href: string;
	export let withAnimation: boolean = false;
</script>

<a class="group text-red-200 hover:text-red-300" {href}>
	<span class="group-hover:underline">
		<slot />
	</span>
	{#if withAnimation}
		<span class="animate-pulses">></span><span class="animate-pulse">></span><span
			class="animate-pulse">></span
		>
	{/if}</a
>
