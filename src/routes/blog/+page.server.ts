import type { PageData } from './$types';

// const posts = await import.meta.glob(`../../../posts/*.md`);

export const load = async () => {
	const res = await fetch('https://berowra-coy-1-h8002843.deta.app/api/collection/ndcvjoyxq17f');
	const data = await res.json();
	console.log(data);
	// for (const post in posts) {
	// 	console.log(post);
	// }
	return { posts: data.items };
};
