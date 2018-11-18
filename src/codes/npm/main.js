module.exports = `import _ from 'lodash';
import axios from 'axios';

document.addEventListener('DOMContentLoaded', () => {
	axios
		.get('/users')
		.then(users => _.filter(users, user => user.lovesWP))
		.then(awesomePeople => {
			const mount = document.querySelector('#app');
			mount.innerHTML = \`<ul>\${awesomePeople.reduce(
				(acc, cur) => \`\${acc}<li>\${cur.name}</li>\`,
				''
			)}</ul>\`;
		});
});`;
