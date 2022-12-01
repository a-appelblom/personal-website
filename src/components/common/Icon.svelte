<script lang="ts" context="module">
	export enum Icons {
		'js',
		'code',
		'css',
		'html',
		'npm',
		'node',
		'psql',
		'sass',
		'scrum',
		'react',
		'angular',
		'git',
		'menu',
		'closeMenu',
	}
</script>

<script lang="ts">
	import DiJsBadge from 'svelte-icons/di/DiJsBadge.svelte';
	import DiCode from 'svelte-icons/di/DiCode.svelte';
	import DiCss3 from 'svelte-icons/di/DiCss3.svelte';
	import DiHtml5 from 'svelte-icons/di/DiHtml5.svelte';
	import DiNpm from 'svelte-icons/di/DiNpm.svelte';
	import DiNodejsSmall from 'svelte-icons/di/DiNodejsSmall.svelte';
	import DiPostgresql from 'svelte-icons/di/DiPostgresql.svelte';
	import DiSass from 'svelte-icons/di/DiSass.svelte';
	import DiScrum from 'svelte-icons/di/DiScrum.svelte';
	import DiReact from 'svelte-icons/di/DiReact.svelte';
	import DiAngularSimple from 'svelte-icons/di/DiAngularSimple.svelte';
	import DiGit from 'svelte-icons/di/DiGit.svelte';
	import FaBars from 'svelte-icons/fa/FaBars.svelte';
	import FaMinus from 'svelte-icons/fa/FaMinus.svelte';

	export let iconName: Icons;
	const components = new Map<Icons, any>([
		[Icons.js, DiJsBadge],
		[Icons.code, DiCode],
		[Icons.css, DiCss3],
		[Icons.node, DiNodejsSmall],
		[Icons.html, DiHtml5],
		[Icons.git, DiGit],
		[Icons.npm, DiNpm],
		[Icons.angular, DiAngularSimple],
		[Icons.scrum, DiScrum],
		[Icons.sass, DiSass],
		[Icons.psql, DiPostgresql],
		[Icons.react, DiReact],
		[Icons.menu, FaBars],
		[Icons.closeMenu, FaMinus],
	]);
</script>

<svelte:component this={components.get(iconName)} />
