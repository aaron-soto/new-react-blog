import React from 'react';
import { Link } from 'react-router-dom';

import './home.scss';

import { projects } from 'utils/constants/projects';

export const Home = () => {
	return (
		<div className='container'>
			<h1 className='page-heading'>Hey, I'm Aaron.</h1>
			<p>
				I'm a Full Stack web developer with a passion in React. I love to build
				anything that will make someone smile -{' '}
				<Link to='/about'>learn more about me</Link>.
			</p>

			<Link className='btn-primary' to='/about'>
				Get Ahold of me
			</Link>

			<h2 className='main-header'>
				<span>Projects</span>
				<Link to='/projects'>View All</Link>
			</h2>

			{projects.slice(0, 5).map((project, idx) => {
				return (
					<Link className='main-list-item' to='/' key={idx}>
						<span className='item-title'>{project.title}</span>
						<span className='item-date'>{project.date}</span>
					</Link>
				);
			})}
			<h2 className='main-header'>
				<span>Newsletter</span>
			</h2>
			<div className='row'>
				<p>
					Subscribe to the newsletter to get my latest content by email. Not on
					any set schedule. Unsubscribe anytime.
				</p>
				<Link className='btn-primary' to='/'>
					Subscribe
				</Link>
			</div>
		</div>
	);
};
