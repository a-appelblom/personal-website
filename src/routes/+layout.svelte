<script>
	import '@fontsource/fira-mono';
	import '../app.css';
	import Footer from 'components/Layout/Footer.svelte';
	import Navigation from 'components/Layout/Navigation.svelte';
</script>

<div class="bg-black h-screen text-white">
	<header>
		<Navigation />
	</header>
	<main class="p-4">
		<slot />
	</main>
	<Footer />
</div>

<style>
	:global(body) {
		font-family: 'Fira Mono', monospace;
	}
</style>
