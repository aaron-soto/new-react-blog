import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink as HashLink } from 'react-router-hash-link';
import { Helmet } from 'react-helmet';
import { blogData } from 'data/blog/blog';

import './home.scss';

import { projects } from 'utils/constants/projects';
import { useAnalyticsEventTracker } from 'utils/analytics/useAnalyticsEventTracker';
import { SquareClicker } from 'components/interactive/square-clicker/SquareClicker';

export const Home = () => {
	const gaEventTracker = useAnalyticsEventTracker('Home Page');
	const handleSubscribe = () => {
		gaEventTracker('subscribe');
	};

	const handleResumeDownload = () => {
		gaEventTracker('resume-download');
	};

	return (
		<div className='container'>
			<Helmet>
				<meta charSet='utf-8' />
				<title>Aaron Soto | Home</title>
			</Helmet>

			{/* <SquareClicker /> */}

			<h1 className='page-heading'>Hey, I'm Aaron.</h1>
			<p>
				I'm a Full Stack web developer with a passion in React. I love to build
				anything that will make someone smile -{' '}
				<Link to='/about'>learn more about me</Link>.
			</p>

			<span
				onClick={handleResumeDownload}
				className='btn-primary resume-download'
			>
				<a href='https://docs.google.com/document/d/1V5IDPwpYZEsDaibjKotqvt-TdKVZSIuCjFCJJLvIoBo/edit?usp=sharing'>
					Download Resume
				</a>
			</span>

			<h2 className='main-header'>
				<span>Experiments</span>
				<Link to='/experiments'>View All</Link>
			</h2>

			{projects.slice(0, 5).map((project, idx) => {
				return (
					<a
						className='main-list-item'
						href={project.demo}
						target='_blank'
						key={idx}
					>
						<span className='item-title'>{project.title}</span>
						<span className='item-date'>{project.date}</span>
					</a>
				);
			})}

			<h2 className='main-header'>
				<span>Blog Posts</span>
				<Link to='/blog'>View All</Link>
			</h2>

			{blogData.slice(0, 5).map((post, idx) => {
				return (
					<Link className='main-list-item' to='/blog' key={idx}>
						<span className='item-title'>{post.title}</span>
						<span className='item-date'>{post.date}</span>
					</Link>
				);
			})}
			<h2 className='main-header'>
				<span>Newsletter</span>
			</h2>
			<div className='row newsletter'>
				<p>
					Subscribe to the newsletter to get my latest content by email. Not on
					any set schedule. Unsubscribe anytime.
				</p>
				<div className='btn-primary' to='/' onClick={handleSubscribe}>
					Subscribe
				</div>
			</div>
		</div>
	);
};
