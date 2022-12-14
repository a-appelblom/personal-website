import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	return { url: 'https://mujina.se' };
};
