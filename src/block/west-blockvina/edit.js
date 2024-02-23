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
	const songs = songlist.videos.map( ( item ) => {
		return {
			label: item.video.title,
			value: item.video.videoId,
		};
	} );

	songs.sort( function( a, b ) {
		const textA = a.label.toUpperCase();
		const textB = b.label.toUpperCase();
		if ( textA < textB ) {
			return -1;
		} else if ( textA > textB ) {
			return 1;
		}
		return 0;
	} );

	let img = '';
	let title = '';
	songlist.videos.forEach( ( thumbs ) => {
		if ( thumbs.video.thumbnail.url.indexOf( videoID ) > -1 ) {
			img = thumbs.video.thumbnail.url;
			title = thumbs.video.title;
		}
	} );

	const blockProps = useBlockProps( {
		className,
	} );

	return (
		<div { ...blockProps }>
			<SelectControl
				label={ __( 'Song to display', 'west-blockvina' ) }
				value={ videoID }
				options={ songs }
				onChange={ ( videoID ) => setAttributes( { videoID } ) }
			/>
			<div className="aligncenter">
				<img
					src={ img }
					alt={ title }
				/>
			</div>
		</div>
	);
};

export default Edit;
