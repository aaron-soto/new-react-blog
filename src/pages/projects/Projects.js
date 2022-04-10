import React from 'react';
import './project.scss';

import { GiNotebook } from 'react-icons/gi';
import { Link } from 'react-router-dom';

import { projects } from 'utils/constants/projects';

export const Projects = () => {
	return (
		<>
			<div className='container'>
				<div className='page-header'>
					<h1>Projects</h1>
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
							<span>
								<GiNotebook />
							</span>
							<div className='links'>
								<Link to={project.source}>Source</Link>
								<Link to={project.demo}>Demo</Link>
							</div>
							<p className='description'>{project.description}</p>
						</div>
					);
				})}
			</div>
		</>
	);
};
