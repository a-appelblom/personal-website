<script lang="ts">
	import Link from './link.svelte';

	export let title: string;
	export let link: { href: string; text: string };
	export let image: { src: string; alt: string };
</script>

<h2>{title}</h2>
<slot />
<Link href={link.href}>{link.text}</Link>
