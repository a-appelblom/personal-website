<script lang="ts">
	import type { PageData } from '../$types';
	import type { PostType } from './+page.server';
	import showdown from 'showdown';

	const converter = new showdown.Converter();

	export let data;
	const { post } = data;
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<div class="max-w-4xl mx-auto">
	<p class="mb-8">{post.date}</p>
	<article class="prose prose-invert prose-2xl">
		{@html converter.makeHtml(post.content)}
	</article>
</div>
