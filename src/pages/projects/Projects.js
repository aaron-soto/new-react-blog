import React from 'react';
import './project.scss';

import { Helmet } from 'react-helmet';
import { GiNotebook } from 'react-icons/gi';

import { projects } from 'utils/constants/projects';
import { useAnalyticsEventTracker } from 'utils/analytics/useAnalyticsEventTracker';

export const Projects = () => {
	const gaEventTracker = useAnalyticsEventTracker('Projects Page');

	return (
		<>
			<Helmet>
				<meta charSet='utf-8' />
				<title>Aaron Soto | Projects</title>
			</Helmet>
			<div className='container'>
				<div className='page-header'>
					<h1>Experiments</h1>
					<p className='description'>
						A few highlights of my open-source projects.
					</p>
				</div>
			</div>
			<div className='projects container-large'>
				{projects.map((project, idx) => {
					return (
						<div className='project' key={idx}>
							<h2>{project.title}</h2>
							<img className='image' src={`images/${project.image}`}></img>
							<div className='links'>
								<span
									onClick={() => gaEventTracker(`source - ${project.title}`)}
								>
									<a
										className='project-link'
										href={project.source}
										target='_blank'
										rel='noopener noreferrer'
									>
										Source
									</a>
								</span>
								<span onClick={() => gaEventTracker(`demo - ${project.title}`)}>
									<a
										className='project-link'
										href={project.demo}
										target='_blank'
										rel='noopener noreferrer'
									>
										Demo
									</a>
								</span>
							</div>
							<p className='description'>{project.description}</p>
						</div>
					);
				})}
			</div>
		</>
	);
};
