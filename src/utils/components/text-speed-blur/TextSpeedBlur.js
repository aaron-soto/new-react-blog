import './text-speed-blur.scss';

export const TextSpeedBlur = () => {
	return (
		<>
			<svg xmlns='http://www.w3.org/2000/svg'>
				<filter id='motion-blur-filter' filterUnits='userSpaceOnUse'>
					<feGaussianBlur stdDeviation='100 0'></feGaussianBlur>
				</filter>
			</svg>

			<span className='speed-effect' filter-content='A'>
				AARON
			</span>
		</>
	);
};
