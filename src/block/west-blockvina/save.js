import {SandBox} from '@wordpress/components';

const Save = ( props ) => {
	const {
		attributes: {
			selectControl
		},
		className
	} = props;

	const url = 'https://www.youtube.com/watch?v='+selectControl;

	return (
		<div className={className}>
			{selectControl && (
				`[embed]${url}[/embed]`
			)}
		</div>
	);
};

export default Save;
