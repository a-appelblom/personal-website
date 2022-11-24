<script>
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaTwitterSquare from 'svelte-icons/fa/FaTwitterSquare.svelte';
	import FaGithubSquare from 'svelte-icons/fa/FaGithubSquare.svelte';
</script>

<footer class="w-screen p-8 flex flex-col gap-4 items-center">
	<h2 class="mx-auto text-2xl">Get in touch</h2>
	<p>To get in touch with me you can find me on:</p>
	<!-- TODO: Add labels to links on hover and make separate component -->
	<ul class="flex gap-8 py-8">
		<li>
			<a
				href="https://www.linkedin.com/in/anton-appelblom-81557087/"
				target="_blank"
				rel="noreferrer"><FaLinkedin /></a
			>
		</li>
		<li>
			<a href="https://twitter.com/AAppelblom" target="_blank" rel="noreferrer"
				><FaTwitterSquare /></a
			>
		</li>
		<li>
			<a href="https://github.com/a-appelblom" target="_blank" rel="noreferrer"
				><FaGithubSquare /></a
			>
		</li>
	</ul>
	<p>OR you can get in touch using the form below</p>
	<p>If all else fail you can reach me at my email</p>
	<form class="flex flex-col w-full gap-4" action="?/formSubmit">
		<div class="flex justify-between w-full">
			<label for="name">Name</label>
			<input class="text-black" name="name" type="text" />
		</div>
		<div class="flex justify-between w-full">
			<label for="email">Email</label>
			<input class="text-black" name="email" type="text" />
		</div>
		<div class="flex justify-between w-full">
			<label for="message">Message</label>
			<textarea class="text-black" name="message" type="text" />
		</div>
	</form>
	<a href="mailto: anton@mujina.se">anton@mujina.se</a>
	<p>Thank you for visiting</p>
</footer>
