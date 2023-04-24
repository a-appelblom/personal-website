export function serializeJson(thing: any): string {
	return `<script type="application/ld+json">${JSON.stringify(thing)}</script>`;
}
