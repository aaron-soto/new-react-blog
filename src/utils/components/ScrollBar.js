import React, { useState, useEffect } from 'react';

export const ScrollBar = () => {
	const [scrollPosition, setScrollPosition] = useState(0);

	const handleScroll = () => {
		setScrollPosition(
			(Math.round(window.pageYOffset) * 100) /
				(document.documentElement.scrollHeight - window.innerHeight)
		);
	};

	useEffect(() => {
		handleScroll();
	}, []);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className='scrollbar' style={{ height: `${scrollPosition}%` }}></div>
	);
};
