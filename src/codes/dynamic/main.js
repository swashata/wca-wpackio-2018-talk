module.exports = `document.querySelector('#btn').addEventListener('click', () => {
	import('./app').then(({ app }) => app());
});`;
