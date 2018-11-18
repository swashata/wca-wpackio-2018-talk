module.exports = `import jQuery from 'jquery';
import initSelect from './select';
// Has no knowledge of select2

jQuery(document).ready(() => {
	initSelect();
});`;
