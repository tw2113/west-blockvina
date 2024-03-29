import { buildQueryString } from '@wordpress/url';

const Save = (props) => {
	const {
		attributes: { videoID },
		className,
	} = props;

	const url =
		'https://www.youtube.com/watch?' +
		buildQueryString({
			v: videoID,
		});

	return (
		<div className={className}>{videoID && `[embed]${url}[/embed]`}</div>
	);
};

export default Save;
