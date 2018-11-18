module.exports = `import _ from 'lodash';
import axios from 'axios';

const peopleWhoLoveWP = axios
	.get('/users')
	.then(users => _.filter(users, user => user.loveWP));`;
