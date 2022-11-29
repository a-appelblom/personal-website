<script lang="ts">
	import CardTextContent from 'components/common/CardTextContent.svelte';
	import Carousel from 'components/common/Carousel.svelte';
	import Icon, { Icons } from 'components/common/Icon.svelte';
	import SectionCard from 'components/common/SectionCard.svelte';
	import SkillCard from 'components/common/SkillCard.svelte';
	import Section from 'components/Section.svelte';

	interface Skill {
		title: string;
		icon: Icons;
		info?: string[];
	}

	export const mySkills: Skill[] = [
		{
			title: 'Javscript',
			icon: Icons.js,
			info: [
				'Javascript is my bread and butter and is the language I am most proficient in.',
				'I can be productive in any javascript framework as well.'
			]
		},
		{
			title: 'HTML',
			icon: Icons.html,
			info: [
				'As a web developer you get nowhere without HTML and I am proficient in the use of semantic readable HTML'
			]
		},
		{
			title: 'CSS',
			icon: Icons.css,
			info: [
				'The second pillar of webdev before javascript actually is css.',
				'I am proficient in both regular css and using proprocessors or libraries such as Sass, Tailwind, Material UI or Styled components'
			]
		},
		{
			title: 'Node',
			icon: Icons.node,
			info: [
				'My first steps into backend delelopment happended through node and I am used to building APIs and scripts in Node.'
			]
		},
		{
			title: 'React',
			icon: Icons.react,
			info: [
				'I have been building webapps and frontends in react and apps in react native all of my career.'
			]
		},
		{ title: 'Git', icon: Icons.git }
	];
</script>

<svelte:head>
	<title>Anton Appelblom</title>
</svelte:head>

<h1 class="text-center text-2xl font-bold text-red-200">Welcome to Anton's site</h1>
<Section>
	<SectionCard
		image={{
			src: 'https://res.cloudinary.com/anapp/image/upload/c_crop,g_face,h_773,y_825/v1669302685/Personal-site/Anton_mr5cn3.webp',
			alt: 'monsieur cage'
		}}
		link={{ href: '#skills', text: 'See what i can do' }}
		title="Who am I?"
		subtitle="My name is Anton Appelblom"
	>
		<p>I am an enthusiastic and eager developer and I am always hungry for trying new things.</p>
	</SectionCard>
</Section>
<Section id="skills">
	<SectionCard title="What can I do" subtitle="Agile fullstack developer">
		<CardTextContent>
			<p>
				I primarily work in javascript and the related web languages to build frontend-applications
				in react. I also build backends and API:s also primarily in javascript although I am very
				much branching out.
			</p>
			<p>
				My greatest joy in my profession is solving problems. When you have had a tricky issue, bug
				or feature and you finally manage to crack it, that is an amazing feeling.
			</p>
			<p>
				I also know my way around the agile way of thinking and usually act as a scrum master or
				agile coach in my teams.
			</p>
		</CardTextContent>
	</SectionCard>
	<Carousel>
		{#each mySkills as { title, icon, info }}
			<SkillCard {title} {info}><Icon iconName={icon} slot="icon" /></SkillCard>
		{/each}
	</Carousel>
</Section>
<Section id="blog">
	<SectionCard title="Read my writing" />
	<p>
		I enjoy writing. If I am good at it though, that is for you to judge. Please read my latest work
	</p>
	<!-- TODO: add list of blogposts -->
</Section>
<Section id="projects">
	<SectionCard title="Check out my projects">
		<p>
			I am employed at a company Mujina where I am a co-founder and together with my amazing
			collegues we do some fun things. I also have a few personal projects you can check out.
		</p>
	</SectionCard>
	<!-- TODO: add list of projects -->
</Section>
<Section id="interests">
	<SectionCard title="My interests">
		<p>Sitting in front of the computer all day every day is not very healthy, so I try not to.</p>
		<p>Get in touch if you want to join me in ome of my other interests, which are:</p>
	</SectionCard>
	<!-- TODO: add list of hobbies -->
</Section>
