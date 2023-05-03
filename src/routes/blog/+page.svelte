<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div>
	<!-- <h1>Blog</h1> -->
	{#each data.posts as item}
		<p>{item.title}</p>
		<a href={`blog/${item.key}`}>{item.key}</a>
	{/each}
	<p>Blog coming so soon</p>
</div>
