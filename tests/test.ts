import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('Welcome to my site');
});

test('section titles are rendered', async ({ page }) => {
	const expectedSections: string[] = [
		'Who am I',
		'What can I do',
		'Read my writing',
		'Check out my projects',
		'My interests'
	];
	await page.goto('/');
	const sections = await page.getByRole('heading', { level: 2 }).allInnerTexts();

	sections.forEach((section, i) => {
		expect(section).toContain(expectedSections[i]);
	});
});
