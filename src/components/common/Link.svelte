<script lang="ts">
	export let href: string;
</script>

<a class="hover:text-red-300 hover:underline" {href}><slot /> >></a>
