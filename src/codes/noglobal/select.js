module.exports = `import jQuery from 'jquery';
import select2 from 'select2';

// Init select2
select2(window, jQuery);

export default function initSelect() {
	jQuery('.select2').select2();
}`;
