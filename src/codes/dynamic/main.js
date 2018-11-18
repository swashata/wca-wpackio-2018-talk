module.exports = `document.addEventListener('DOMContentLoaded', () => {
	const btn = document.querySelector('#btn');
	btn.addEventListener('click', e => {
		e.preventDefault();
		import('./app').then(({ app }) => {
			app();
		});
	});
});`;
