import { ComingSoon } from 'pages/error/ComingSoon';
import React from 'react';
import { Helmet } from 'react-helmet';

export const Blog = () => {
	return (
		<div className='container'>
			<Helmet>
				<meta charSet='utf-8' />
				<meta
					name='description'
					content='My Blog Posts where I write about alittle of everything.'
				/>
				<title>Aaron Soto | Blog</title>
			</Helmet>
			<ComingSoon />
		</div>
	);
};
