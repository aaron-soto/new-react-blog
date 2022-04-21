import { DarkMode } from 'components/darkmode/DarkMode';
import './navbar.scss';

import { NavLink } from 'react-router-dom';

export const Navbar = () => {
	return (
		<nav className='navbar'>
			<div className='container'>
				<ul>
					<li>
						<NavLink to='/'>Home</NavLink>
					</li>
					<li>
						<NavLink to='/blog'>Blog</NavLink>
					</li>
					<li>
						<NavLink to='/experiments'>Projects</NavLink>
					</li>
					<li>
						<NavLink to='/about'>About</NavLink>
					</li>
				</ul>
				<DarkMode />
			</div>
		</nav>
	);
};
