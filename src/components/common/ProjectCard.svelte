<script lang="ts">
	import Image from './Image.svelte';
	import Link from './Link.svelte';

	export let title: string;
	export let description: string;
	export let link: { href: string; text: string };
	export let image: { src: string; alt: string };
</script>

<div
	class="w-[70vw] border rounded-lg p-4 flex flex-col gap-2 shadow-lg shadow-slate-800 justify-between"
>
	<div class="flex flex-col gap-4">
		<p class="text-lg font-bold">{title}</p>
		<Image src={image.src} alt={image.alt} withGradient={false} />
	</div>
	<div class="flex flex-col gap-2">
		<p>{description}</p>
		<Link href={link.href}>{link.text}</Link>
	</div>
</div>
