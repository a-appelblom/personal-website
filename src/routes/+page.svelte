<script>
	import Image from 'components/common/Image.svelte';
	import Section from 'components/Section.svelte';
</script>

<svelte:head>
	<title>Anton Appelblom</title>
</svelte:head>

<h1 class="text-center text-2xl font-bold">Welcome to the site of Anton Appelblom</h1>
<!-- Presentation -->
<Section>
	<div>
		<h2>Who am I</h2>
		<h3>My name is Anton Appelblom</h3>
		<p>I am an enthusiastic and eager developer. I am always hungry for trying new things.</p>
	</div>
	<Image src="https://www.placecage.com/200/300" alt="monsieur cage" />
</Section>
<Section>
	<!-- skills -->
	<h2>What can I do</h2>
	<h3>Agile fullstack developer</h3>
	<p>
		I primarily work in javascript and the related web languages to build frontend-applications in
		react. I also build backends and API:s also primarily in javascript although I am very much
		branching out.
	</p>
	<p>
		My greatest joy in my profession is solving problems. When you have had a tricky issue, bug or
		feature and you finally manage to crack it, that is an amazing feeling.
	</p>
	<!-- TODO: add list of skills -->
</Section>
<Section>
	<h2>Read my writing</h2>
	<p>
		I enjoy writing. If I am good at it though, that is for you to judge. Please read my latest work
	</p>
	<!-- TODO: add list of blogposts -->
</Section>
<Section>
	<h2>Check out my projects</h2>
	<p>
		I am employed at my own company Mujina and together with my amazing collegues we do some fun
		things. I also have a few personal projects you can check out.
	</p>
	<!-- TODO: add list of projects -->
</Section>
<Section>
	<h2>My interests</h2>
	<p>Sitting in front of the computer all day every day is not very healthy, so I try not to.</p>
	<p>Get in touch if you want to join me in ome of my other interests, which are:</p>
	<!-- TODO: add list of hobbies -->
</Section>
