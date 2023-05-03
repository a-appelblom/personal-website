import type { PageData } from './$types';

// const posts = await import.meta.glob(`../../../posts/*.md`);

export interface PostType {
	tags: string[];
	title: string;
	date: string;
	content: string;
}

export const load = async ({ params: { slug } }): PageData => {
	console.log(slug);
	const res = await fetch(`https://berowra-coy-1-h8002843.deta.app/api/content/${slug}?content`);
	const data = await res.json();
	const post: PostType = {};
	Object.values(data.content).forEach((item) => {
		post[item.title.toLowerCase()] = item.value;
	});

	console.log(post);
	return { post: post };
};
