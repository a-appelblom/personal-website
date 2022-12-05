<script lang="ts">
	import Image from './Image.svelte';

	export let title: string;
	export let description: string;
	export let image: { src: string; alt: string };
</script>

<div class="w-[70vw] lg:w-60 border p-4 rounded-lg flex flex-col justify-between">
	<div class="flex flex-col gap-2">
		<p class="text-lg font-bold text-center">{title}</p>
		<p class="text-clip">{description}</p>
	</div>
	<Image src={image.src} alt={image.alt} />
</div>
