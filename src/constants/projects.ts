interface Project {
	title: string;
	description: string;
	link: { href: string; text: string };
	image: { src: string; alt: string };
}

export const projects: Project[] = [
	{
		title: 'Mujina.se',
		description: 'The website for my company Mujina',
		link: { href: 'https://www.mujina.se/', text: 'Check it out' },
		image: { src: 'https://www.placecage.com/200/300', alt: 'Nic Cage' },
	},
	{
		title: 'Smart QR',
		description: 'A webapp for creating dynamic QR-codes',
		link: { href: 'https://app.smart-qr.se/', text: 'Check it out' },
		image: { src: 'https://www.placecage.com/200/300', alt: 'Nic Cage' },
	},
	{
		title: 'Badmintonstadion.se',
		description: 'The website for the biggest badminton place in stockholm city.',
		link: { href: 'https://www.badmintonstadion.se/', text: 'Check it out' },
		image: { src: 'https://www.placecage.com/200/300', alt: 'Nic Cage' },
	},
	{
		title: 'Javascript course',
		description: 'A test project',
		link: { href: 'google.com', text: 'Check it out' },
		image: { src: 'https://www.placecage.com/200/300', alt: 'Nic Cage' },
	},
];
