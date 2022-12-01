<script lang="ts">
	import CardTextContent from './CardTextContent.svelte';
	import Image from './Image.svelte';
	import Link from './Link.svelte';

	export let title: string | undefined = undefined;
	export let subtitle: string | undefined = undefined;
	export let link: { href: string; text: string } | undefined = undefined;
	export let image: { src: string; alt: string } | undefined = undefined;
</script>

{#if title}
	<h2 class="text-2xl py-4">{title}</h2>
{/if}
{#if subtitle}
	<h3 class="text-3xl text-center py-8">{subtitle}</h3>
{/if}
<slot />
{#if image}
	<Image src={image.src} alt={image.alt} />
{/if}
{#if link}
	<Link href={link.href} withAnimation>{link.text}</Link>
{/if}
