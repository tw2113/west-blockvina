/**
 * External Dependencies.
 */

// Determine Mode.
const production = 'production' === process.env.NODE_ENV ? true : false;

// Assign plugins.
const plugins = [
	require( 'postcss-safe-parser' ),
	require( 'autoprefixer' ),
];

// Minify production.
if ( production ) {
	plugins.push(
		require( 'cssnano' )( {
			preset: 'default',
		} )
	);
}

// Module Export.
module.exports = {
	plugins,
};
