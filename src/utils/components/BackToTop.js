import { AiFillCaretUp } from 'react-icons/ai';
import { useState } from 'react';

export const BackToTop = () => {
	const [visible, setVisible] = useState(false);

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 150) {
			setVisible(true);
		} else if (scrolled <= 150) {
			setVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
			/* you can also use 'auto' behaviour
         in place of 'smooth' */
		});
	};

	window.addEventListener('scroll', toggleVisible);

	return (
		<div
			className='to-top'
			onClick={scrollToTop}
			style={{ display: visible ? 'flex' : 'none' }}
		>
			<AiFillCaretUp />
		</div>
	);
};
