<script lang="ts">
	export let id: string | undefined = undefined;
</script>

<section {id} class="mb-6 mt-2 p-4 max-w-7xl mx-auto overflow-hidden flex flex-col">
	<slot />
</section>
