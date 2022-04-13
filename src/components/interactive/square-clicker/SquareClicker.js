import { useState, useEffect, useRef, useLayoutEffect } from 'react';

export const SquareClicker = () => {
	// get canvas
	const canvasRef = useRef();

	// set frame counter
	const [counter, setCounter] = useState(0);
	const [shouldStop, setShouldStop] = useState(true);

	// box position and speed
	const [positionX, setPositionX] = useState(165);
	const [positionY, setPositionY] = useState(165);

	const [dx, setDx] = useState(2);
	const [dy, setDy] = useState(1.5);

	const [motionType, setMotionType] = useState('Circle');

	// update the counter
	useLayoutEffect(() => {
		if (!shouldStop) {
			let timerId;

			const animate = () => {
				setCounter((c) => c + 1);
				timerId = requestAnimationFrame(animate);
			};
			timerId = requestAnimationFrame(animate);
			return () => cancelAnimationFrame(timerId);
		}
	}, [shouldStop]);

	// output graphics
	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');

		// Clear background each frame
		context.clearRect(0, 0, 350, 350);

		// Draw background
		context.fillStyle = '#ff8';
		context.fillRect(0, 0, canvas.width, canvas.height);

		// Draw square
		context.fillStyle = '#555555';
		context.fillRect(positionX, positionY, 20, 20);
	}, [counter]);

	const changeMotionType = () => {
		if (motionType === 'Circle') {
			setMotionType('Bounce');
		} else {
			setMotionType('Circle');
		}
	};

	return (
		<div className='container'>
			<canvas
				ref={canvasRef}
				width='350px'
				height='350px'
				onClick={changeMotionType}
			/>
			<h3>Frame count: {counter}</h3>
			<p>Motion type is {motionType}</p>
			<button onClick={() => setShouldStop(!shouldStop)}>
				{shouldStop ? 'Start' : 'Stop'}
			</button>
		</div>
	);
};
