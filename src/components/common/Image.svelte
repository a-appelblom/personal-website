<script lang="ts">
	export let src: string;
	export let alt: string;
	export let withGradient: boolean = true;
</script>

<div class="relative h-fit w-full">
	{#if withGradient}
		<div class="absolute w-full h-full bg-gradient-to-t from-black via-transparent to-black" />
		<div class="absolute w-full h-full bg-gradient-to-r from-black via-transparent to-black" />
	{/if}
	<!-- <div class="absolute w-full h-full bg-gradient-to-bl from-black via-transparent" /> -->
	<!-- <div class="absolute w-full h-full bg-gradient-to-tl from-black via-transparent" /> -->
	<img class="w-full aspect-auto" {src} {alt} />
</div>
