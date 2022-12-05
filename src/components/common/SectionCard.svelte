<script lang="ts">
	import Image from './Image.svelte';
	import Link from './Link.svelte';

	export let title: string | undefined = undefined;
	export let subtitle: string | undefined = undefined;
	export let link: { href: string; text: string } | undefined = undefined;
	export let image: { src: string; alt: string } | undefined = undefined;
</script>

<div class="lg:grid grid-cols-2">
	<div class="lg:flex lg:flex-col lg:justify-center">
		{#if title}
			<h2 class="text-2xl lg:text-4xl py-4">{title}</h2>
		{/if}
		{#if subtitle}
			<p class="text-3xl lg:text-5xl text-center lg:text-left py-8">{subtitle}</p>
		{/if}
		{#if image}
			<div class="text-lg">
				<slot />
			</div>
		{/if}
	</div>
	{#if !image}
		<div class="text-lg">
			<slot />
		</div>
	{/if}
	{#if image}
		<div class="">
			<Image src={image.src} alt={image.alt} />
		</div>
	{/if}
	{#if link}
		<div>
			<Link href={link.href} withAnimation>{link.text}</Link>
		</div>
	{/if}
</div>
