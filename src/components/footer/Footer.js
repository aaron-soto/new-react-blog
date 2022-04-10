import { Link } from 'react-router-dom';

import './footer.scss';

export const Footer = () => {
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
				<span>Made by Aaron Soto last updated 4/10/22</span>
			</div>
		</div>
	);
};
