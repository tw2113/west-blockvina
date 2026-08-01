<?php
/**
 * Plugin Name:     West Blockvina
 * Description:     A 'Crazy Ex-Girlfriend song picker'
 * Version:         1.2.0
 * Author:          tw2113
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     west-blockvina
 * @package         tw2113\WestBlockvina
 */

namespace tw2113\WestBlockvina;

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

/**
 * Register the block with WordPress.
 *
 * @author tw2113
 * @since 0.0.1
 */
function register_block() {
	// Register block with WordPress.
	register_block_type( __DIR__ );
}
add_action( 'init', __NAMESPACE__ . '\register_block' );
