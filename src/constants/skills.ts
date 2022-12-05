import { Icons } from 'components/common/Icon.svelte';

interface Skill {
	title: string;
	icon: Icons;
	info?: string[];
}

export const mySkills: Skill[] = [
	{
		title: 'JS',
		icon: Icons.js,
		info: [
			'Javascript is my bread and butter and is the language I am most proficient in.',
			'I can be productive in any javascript framework as well.',
		],
	},
	{
		title: 'HTML',
		icon: Icons.html,
		info: [
			'As a web developer you get nowhere without HTML and I am proficient in the use of semantic readable HTML',
		],
	},
	{
		title: 'CSS',
		icon: Icons.css,
		info: [
			'The second pillar of webdev before javascript actually is css.',
			'I am proficient in both regular css and using proprocessors or libraries such as Sass, Tailwind, Material UI or Styled components',
		],
	},
	{
		title: 'Node',
		icon: Icons.node,
		info: [
			'My first steps into backend delelopment happended through node and I am used to building APIs and scripts in Node.',
		],
	},
	{
		title: 'React',
		icon: Icons.react,
		info: [
			'I have been building webapps and frontends in react and apps in react native all of my career.',
		],
	},
	{
		title: 'Git',
		icon: Icons.git,
		info: [
			'Git was the first tool i used when i started my javascript journey, and I have since been using it in teams and for my personal projects.',
		],
	},
];
