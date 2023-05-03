<script lang="ts">
	import CardTextContent from 'components/common/CardTextContent.svelte';
	import Carousel from 'components/common/Carousel.svelte';
	import Icon from 'components/common/Icon.svelte';
	import Section from 'components/Section.svelte';
	import ProjectCard from 'components/common/ProjectCard.svelte';
	import SectionCard from 'components/common/SectionCard.svelte';
	import SkillCard from 'components/common/SkillCard.svelte';
	import HobbyCard from 'components/common/HobbyCard.svelte';
	import { mainPage } from '../constants/mainPageData';
	import { mySkills } from '../constants/skills';
	import { projects } from '../constants/projects';
	import { hobbies } from '../constants/hobbies';
	import SkillCarousel from 'components/common/SkillCarousel.svelte';
	import ProjectCarousel from 'components/common/ProjectCarousel.svelte';
	import { serializeJson } from '../utils';

	import { browser } from '$app/environment';
</script>

<svelte:head>
	<title>Anton Appelblom</title>
	<!-- {@html serializeJson({
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Anton Appelblom',
		url: 'https://anapp.se',
	})} -->
	<script type="application/ld+json">
		{
		  "@context": "https://schema.org",
		  "@type": "LocalBusiness",
		  "email": "mailto:anton@mujina.se",
		  "image": "https://res.cloudinary.com/anapp/image/upload/c_crop,g_face,h_773,y_825/v1669302685/Personal-site/Anton_mr5cn3.webp",
		  "name": "Anton Appelblom @ Mujina AB",
		  "url": "http://anapp.se"
		}
	</script>
</svelte:head>

<h1 class="text-center text-3xl lg:text-7xl font-bold mt-4">Welcome</h1>
<Section id="hero">
	<SectionCard
		image={{
			src: 'https://res.cloudinary.com/anapp/image/upload/c_crop,g_face,h_773,y_825/v1669302685/Personal-site/Anton_mr5cn3.webp',
			alt: 'Anton Appelblom smiling',
		}}
		link={{ href: '#skills', text: 'See what i can do' }}
		subtitle={mainPage.hero.subtitle}
	>
		<CardTextContent text={mainPage.hero.text} />
	</SectionCard>
</Section>
<Section id="skills">
	<SectionCard title="What can I do" subtitle="Agile fullstack developer">
		<CardTextContent text={mainPage.skills.text} />
	</SectionCard>
	<div class="self-center">
		<SkillCarousel>
			{#each mySkills as { title, icon, info }}
				<SkillCard {title} {info}><Icon iconName={icon} slot="icon" /></SkillCard>
			{/each}
		</SkillCarousel>
	</div>
</Section>
<Section id="blog">
	<SectionCard title="Read my writing">
		<CardTextContent text={mainPage.blog.text} />
	</SectionCard>
	<!-- TODO: add list of blogposts -->
</Section>
<Section id="projects">
	<SectionCard title="Check out my projects">
		<CardTextContent text={mainPage.projects.text} />
	</SectionCard>
	<ProjectCarousel>
		{#each projects as { title, description, link, image }}
			<ProjectCard {title} {description} {link} {image} />
		{/each}
	</ProjectCarousel>
</Section>
<Section id="interests">
	<SectionCard title="My interests">
		<CardTextContent text={mainPage.interests.text} />
	</SectionCard>
	<Carousel>
		{#each hobbies as { title, description, image }}
			<HobbyCard {title} {description} {image} />
		{/each}
	</Carousel>
</Section>
