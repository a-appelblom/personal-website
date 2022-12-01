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
		image: {
			src: 'https://res.cloudinary.com/anapp/image/upload/v1669812918/Personal-site/Screen_Shot_2022-11-29_at_17.26.45_iqsbp1.png',
			alt: 'Screenshot of mujina.se',
		},
	},
	{
		title: 'Smart QR',
		description: 'A webapp for creating dynamic QR-codes',
		link: { href: 'https://app.smart-qr.se/', text: 'Check it out' },
		image: {
			src: 'https://res.cloudinary.com/anapp/image/upload/v1669812919/Personal-site/Screen_Shot_2022-11-29_at_17.26.30_nmwuge.png',
			alt: 'Screenshot of SmartQR',
		},
	},
	{
		title: 'Badmintonstadion.se',
		description: 'The website for the biggest badminton place in stockholm city.',
		link: { href: 'https://www.badmintonstadion.se/', text: 'Check it out' },
		image: {
			src: 'https://res.cloudinary.com/anapp/image/upload/v1669812918/Personal-site/Screen_Shot_2022-11-29_at_17.27.04_ve0x0e.png',
			alt: 'Screenshot of badmintonstadion.se',
		},
	},
	{
		title: 'Javascript course',
		description: 'A test project',
		link: { href: 'https://github.com/a-appelblom/js-java-21', text: 'Check out the repo' },
		image: {
			src: 'https://res.cloudinary.com/anapp/image/upload/v1669899810/Personal-site/Screen_Shot_2022-12-01_at_14.02.45_zvt5wg.png',
			alt: 'Nic Cage',
		},
	},
];
