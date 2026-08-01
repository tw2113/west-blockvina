/**
 * REGISTER: tw2113 West Blockvina.
 */
import edit from './edit';
import save from './save';

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType('tw2113/west-blockvina', {
	edit,
	save,
});
