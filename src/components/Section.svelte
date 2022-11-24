<script lang="ts">
	export let id: string | undefined = undefined;
</script>

<section {id} class="my-8 p-4 max-w-7xl mx-auto overflow-hidden">
	<slot />
</section>
