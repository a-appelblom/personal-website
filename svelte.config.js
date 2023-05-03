// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import mdsvexconfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: ['.svelte', ...mdsvexconfig.extensions],
	preprocess: [mdsvex(mdsvexconfig), preprocess({ postcss: true, preserve: ['ld+json'] })],

	kit: {
		adapter: adapter(),
		alias: {
			components: 'src/components/',
			data: 'src/data/',
		},
	},
};

export default config;
