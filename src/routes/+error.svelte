<script>
	import { page } from '$app/stores';
	console.log($page.error);
</script>

<h1>You has an error</h1>
<p>Status: {$page.status}</p>
<p>Error message: {$page?.error?.message}</p>
