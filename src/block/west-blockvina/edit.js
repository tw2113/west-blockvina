/**
 * EDIT: West Blockvina
 */
import { SelectControl } from '@wordpress/components';
import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import Songlist from '../data/songlist';
import './editor.scss';

const Edit = ( props ) => {
	const {
		attributes: {
			videoID,
		},
		className,
		setAttributes,
	} = props;

	const songlist = Songlist();
	const songs = songlist.videos.map((item, i) => {
		return {
			'label': item.video.title,
			'value': item.video.videoId
		};
	});

	let img = '';
	jQuery(songlist.videos).each((i, thumbs) => {
		if (thumbs.video.thumbnail.url.indexOf(selectControl) > -1) {
			img = thumbs.video.thumbnail.url;
		}
	});

	// Update field content on change.
	const onChangeContent = ( newContent ) => {
		setAttributes( { content: newContent } );
	};

	return (
		<div { ...useBlockProps() } className={ className }>
			<SelectControl
				label={ __( 'Song to display', 'west-blockvina' ) }
				value={ videoID }
				options={ songs }
				onChange={ ( videoID ) => setAttributes( { videoID } ) }
			/>
			<div className="aligncenter">
				<img
					src={ img }
					alt=""
				/>
			</div>
		</div>
	);
};

export default Edit;
