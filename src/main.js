import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Annie',
		number: 1
	}
});

export default app;