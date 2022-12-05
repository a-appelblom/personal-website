<script lang="ts">
	export let text: string[];
</script>

<div
	class="invisible opacity-0 translate-x-[-100vw] translate-y-0 group-hover:visible group-hover:translate-x-0 group-hover:lg:translate-x-1/2 absolute max-w-32 p-8 right-0 lg:right-1/2 group-hover:translate-y-28 bg-gradient-to-r from-gray-900  via-black to-gray-900 group-hover:opacity-90 transition-all"
>
	{#each text as paragraph}
		<p>{paragraph}</p>
	{/each}
</div>
