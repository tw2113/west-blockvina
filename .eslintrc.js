import wordpress from '@wordpress/eslint-plugin';

export default [
	...wordpress.configs.recommended,
	{
		rules: {
			camelcase  : 'off',
			'no-shadow': 'off',
		},
	},
];
