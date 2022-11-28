import type { RequestEvent, Actions } from '@sveltejs/kit';

export const actions: Actions = {
	formSubmit: async ({ request }: RequestEvent) => {
		const data = await request.formData();
		console.log(data);
		const name = data.get('name');
		const email = data.get('email');
		const message = data.get('message');
		return { success: true };
	}
};
