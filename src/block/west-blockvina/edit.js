/**
 * EDIT: West Blockvina
 */
import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import Songlist from '../data/songlist';
import logo from '../assets/crazy-ex-girlfriend-logo.png';

const Edit = ( props ) => {
	const {
		attributes: {
			selectControl,
		},
		className,
		setAttributes,
	} = props;
	const songlist = Songlist();
	const songs = songlist.videos.map( ( item ) => {
		return {
			label: item.video.title,
			value: item.video.videoId,
		};
	} );

	let img = '';
	jQuery( songlist.videos ).each( ( i, thumbs ) => {
		if ( -1 < thumbs.video.thumbnail.url.indexOf( selectControl ) ) {
			img = thumbs.video.thumbnail.url;
		}
	} );

	// Update field content on change.
	const onChangeContent = ( newContent ) => {
		setAttributes( { content: newContent } );
	};

	return (
		<div className={ className }>
			<img
				className="logo"
				src={ logo }
				alt={ __( 'Crazy Ex-Girlfriend logo', 'west-blockvina' ) }
			/>
			<SelectControl
				label={ __( 'Song to display:', 'west-blockvina' ) }
				value={ selectControl }
				options={ songs }
				onChange={ selectControl => setAttributes( { selectControl } ) }
			/>
			<img
				className="preview_thumb"
				src={ img }
				alt=""
			/>
		</div>
	);
};

export default Edit;
