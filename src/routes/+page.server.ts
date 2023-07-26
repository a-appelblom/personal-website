import { SECRET_SLACK_TOKEN } from '$env/static/private';
import { PUBLIC_SLACK_CHANNEL_ID } from '$env/static/public';
import type { RequestEvent, Actions } from '@sveltejs/kit';

export const actions: Actions = {
	formSubmit: async ({ request }: RequestEvent) => {
		const data = await request.formData();
		const name = data.get('name');
		const email = data.get('email');
		const message = data.get('message');

    const domain = email.split("@");
    if(domain.includes("anapp"){
      message = "POTENTIAL SPAM \n \n \n" + message;
    }

		const slackMessage = {
			channel: PUBLIC_SLACK_CHANNEL_ID,
			// text: `${name} with email: ${email} sends message: ${message}`,

			blocks: [
				{
					type: 'section',
					text: {
						type: 'mrkdwn',
						text: `You have a new message:\n*${name}*\n *Email: ${email}*`,
					},
				},
				{
					type: 'section',
					text: {
						type: 'mrkdwn',
						text: message,
					},
				},
			],
		};

		const options = {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
				Authorization: `Bearer ${SECRET_SLACK_TOKEN}`,
			},
			body: JSON.stringify(slackMessage),
		};

		try {
			const res = await fetch('https://slack.com/api/chat.postMessage', options);

			const resData = await res.json();
			console.log(resData);
		} catch (error) {
			console.error(error);
		}

		return { success: true };
	},
};
