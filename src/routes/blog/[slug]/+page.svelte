<script lang="ts">
	export let data: { post: string };
</script>

<div class="max-w-4xl mx-auto">
	<div class="markdown">{@html data.post}</div>
</div>

<style scoped>
	.markdown h1 {
		@apply text-3xl;
	}
</style>
