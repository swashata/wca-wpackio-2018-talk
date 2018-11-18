module.exports = `import mountApplication from './app';

document.addEventListener('DOMContentLoaded', () => {
	const app = document.querySelector('#app');
	mountApplication(app);
});`;
