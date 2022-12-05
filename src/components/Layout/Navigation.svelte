<script>
	import Link from 'components/common/Link.svelte';
	import SideNav from 'components/common/SideNav.svelte';
</script>

<nav class="bg-gradient-to-b from-indigo-900 to-black h-16 flex items-center px-4 text-xl">
	<SideNav />
	<ul class="flex gap-4">
		<li>
			<Link href="/">Home</Link>
		</li>
		<li>
			<Link href="/blog">Blog</Link>
		</li>
	</ul>
</nav>
