interface Hobby {
	title: string;
	description: string;
	image: { src: string; alt: string };
}

export const hobbies: Hobby[] = [
	{
		title: 'Badminton',
		description:
			'I played badminton all of my childhood and still enjoy playing all the chances i get.',
		image: {
			src: 'https://res.cloudinary.com/anapp/image/upload/v1669812917/Personal-site/frame-harirak-UR_mNYmpwco-unsplash_cvnyuu.jpg',
			alt: '',
		},
	},
	{
		title: 'Biking',
		description:
			'I love biking and it is usually my primary mode of transport as long as the weather allows for it',
		image: {
			src: 'https://res.cloudinary.com/anapp/image/upload/v1669812918/Personal-site/yury-kirillov-whhipVhkcN8-unsplash_uuppex.jpg',
			alt: '',
		},
	},
	{
		title: 'Climbing',
		description:
			'A couple of years ago I got my eyes opened to climbing. Mostly indoors bouldering, but I am not as active anymore.',
		image: {
			src: 'https://res.cloudinary.com/anapp/image/upload/v1669900116/Personal-site/yns-plt-NY1D4Zni7fc-unsplash_1_xlzqfi.jpg ',
			alt: '',
		},
	},
	{
		title: 'Gaming',
		description:
			'Gaming is a big hobby of mine, I do not make as much time for it anymore, but it is a great way of relaxing.',
		image: {
			src: 'https://res.cloudinary.com/anapp/image/upload/v1669812917/Personal-site/igor-karimov-M1nZU61xTK4-unsplash_xnj06r.jpg',
			alt: '',
		},
	},
	{
		title: 'Music',
		description:
			'I hated music as a kid, but have since then completely turned around and I now enjoy both listening to it and playing it. I mainly play the bass.',
		image: {
			src: 'https://res.cloudinary.com/anapp/image/upload/v1669812918/Personal-site/katarina-bubenikova-nUd7uq3i0qs-unsplash_yyqhfc.jpg',
			alt: '',
		},
	},
	{
		title: 'Podcasts',
		description:
			'As much as I love music, podcasts have really stolen my attention recently. I listen to code, facts and doCumentary podcasts.',
		image: {
			src: 'https://res.cloudinary.com/anapp/image/upload/v1669812918/Personal-site/petr-machacek-e-0fgKGjx_g-unsplash_wppgge.jpg',
			alt: '',
		},
	},
	{
		title: 'Language',
		description:
			'I love languages and was planing on basing my career on it until I fell back in love with coding. I have been in Japan and Taiwan to study.',
		image: {
			src: 'https://res.cloudinary.com/anapp/image/upload/v1669812917/Personal-site/drew-beamer-3SIXZisims4-unsplash_gd4f28.jpg',
			alt: '',
		},
	},
	{
		title: 'Everything else',
		description: 'I do enjoy doing most things and am always open to new hobbies.',
		image: {
			src: 'https://res.cloudinary.com/anapp/image/upload/v1669812921/Personal-site/greg-rakozy-0LU4vO5iFpM-unsplash_dprw1z.jpg',
			alt: '',
		},
	},
];
