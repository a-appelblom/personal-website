<script lang="ts">
	import { text } from 'svelte/internal';
	import Image from './Image.svelte';
	import Link from './Link.svelte';

	export let title: string;
	export let description: string;
	export let link: { href: string; text: string };
	export let image: { src: string; alt: string };
</script>

<div class="w-[70vw] border p-4">
	<p class="text-lg font-bold">{title}</p>
	<Link href={link.href}>{link.text}</Link>
	<Image src={image.src} alt={image.alt} />
	<p class="text-clip">{description}</p>
</div>
