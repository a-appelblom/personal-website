interface MainPage {
	[key: string]: {
		title: string;
		subtitle?: string;
		text: string[];
	};
}

export const mainPage: MainPage = {
	hero: {
		title: 'Who am I?',
		subtitle: 'My name is Anton Appelblom',
		text: [
			'I am an enthusiastic and eager developer and I am always hungry for trying new things.',
		],
	},
	skills: {
		title: 'What can I do?',
		subtitle: 'Agile fullstack developer',
		text: [
			'I primarily work in javascript and the related web languages to build frontend-applications in react. I also build backends and API:s also primarily in javascript although I am very much branching out.',
			'My greatest joy in my profession is solving problems. When you have had a tricky issue, bug or feature and you finally manage to crack it, that is an amazing feeling.',
			'I also know my way around the agile way of thinking and usually act as a scrum master or agile coach in my teams.',
		],
	},
	blog: {
		title: 'Read my writing',
		text: [
			'I enjoy writing. If I am good at it though, that is for you to judge. Please read my latest work',
		],
	},
	projects: {
		title: 'Check out my projects',
		text: [
			'I am employed at a company Mujina where I am a co-founder and together with my amazing collegues we do some fun things. I also have a few personal projects you can check out.',
		],
	},
	interests: {
		title: 'My interests',
		text: [
			'Sitting in front of the computer all day every day is not very healthy, so I try not to.',
			'Get in touch if you want to join me in one of my other interests, which are:',
		],
	},
};
