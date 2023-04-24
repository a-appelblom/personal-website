// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess({ postcss: true }), preprocess({ preserve: ['ld+json'] })],

	kit: {
		adapter: adapter(),
		alias: {
			components: 'src/components/',
			data: 'src/data/',
		},
	},
};

export default config;
