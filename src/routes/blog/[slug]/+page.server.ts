import type { PageData } from './$types';
import { html } from '../../../posts/post.md';

export const load = async () => {
	console.log(html);
	return { post: html };
};
