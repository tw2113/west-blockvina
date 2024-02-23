const Save = ( props ) => {
	const {
		attributes: {
			videoID,
		},
		className,
	} = props;

	const url = 'https://www.youtube.com/watch?v=' + videoID;

	return (
		<div className={ className }>
			{ videoID && (
				`[embed]${ url }[/embed]`
			) }
		</div>
	);
};

export default Save;
