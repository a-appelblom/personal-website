import { plugin as markdown, Mode } from 'vite-plugin-markdown';
import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit(), markdown({ mode: [Mode.HTML, Mode.TOC] })],
};

export default config;
