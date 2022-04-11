import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import './footer.scss';

const moment = require('moment'); // require

export const Footer = () => {
	const [time, setTime] = useState(moment());

	useEffect(() => {
		let timer = setInterval(() => {
			setTime(moment());
		}, 1000);

		return function cleanup() {
			clearInterval(timer);
		};
	}, []);

	return (
		<div className='footer'>
			<div className='container'>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/blog'>Blog</Link>
					</li>
					<li>
						<Link to='/projects'>Projects</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
				</ul>
				<span className='time'>
					Local Time: Phoenix, Arizona - {time.format('LTS')}
				</span>
				<span>Made by Aaron Soto last updated 4/10/22</span>
			</div>
		</div>
	);
};
