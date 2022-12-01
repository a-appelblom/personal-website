<script lang="ts">
	export let text: string[] | undefined = undefined;
</script>

<div class="flex flex-col gap-4">
	{#if text}
		{#each text as paragraph}
			<p>{paragraph}</p>
		{/each}
	{/if}
</div>
