import { useEffect, useState } from 'react';
import './toggle-switch.scss';

export const DarkMode = () => {
	const [isToggled, setIsToggled] = useState(true);
	const onToggle = () => setIsToggled(!isToggled);

	useEffect(() => {
		document.documentElement.classList.add(`theme-light`);
	}, []);

	useEffect(() => {
		if (isToggled) {
			document.documentElement.className = `theme-light`;
		} else {
			document.documentElement.className = `theme-dark`;
		}
	}, [isToggled]);

	return (
		<div className='toggle-wrapper'>
			<label className='toggle-switch'>
				<input type='checkbox' checked={isToggled} onChange={onToggle} />
				<span className='switch' />
			</label>
		</div>
	);
};
