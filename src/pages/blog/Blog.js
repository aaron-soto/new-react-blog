import { useEffect, useState } from 'react';

import { ComingSoon } from 'pages/error/ComingSoon';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { blogData } from 'data/blog/blog';

import { GrFormClose } from 'react-icons/gr';

import './blog.scss';

export const Blog = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [filteredPosts, setFilteredPosts] = useState([]);

	useEffect(() => {
		setFilteredPosts(blogData);
	}, []);

	const updatePosts = (e) => {
		setSearchTerm(e.target.value);
		let posts = blogData.filter((post) => {
			return (
				post.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
				post.tags.forEach((tag) => {
					tag.toLowerCase().includes(e.target.value.toLowerCase());
				})
			);
		});

		setFilteredPosts(posts);
	};

	const resetSearch = () => {
		setSearchTerm('');
		setFilteredPosts(blogData);
	};

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

			<div className='page-header'>
				<h1>Blog Posts</h1>
				<p className='description'>
					A collection of any thoughts I might have. Enjoy!
				</p>
			</div>

			<span className='search-wrapper'>
				<input
					className='blog-search'
					placeholder='Search Blog Posts'
					type='text'
					value={searchTerm}
					onChange={(e) => updatePosts(e)}
				/>
				{searchTerm.length > 0 && (
					<span className='icon-wrapper' onClick={resetSearch}>
						<GrFormClose className='close-icon' />
					</span>
				)}
			</span>

			<ul className='blog-list'>
				{filteredPosts.map((post) => {
					return (
						<li>
							<span>{post.date}</span>
							<Link className='' to='/coming-soon'>
								<h2>{post.title}</h2>
							</Link>
						</li>
					);
				})}
			</ul>
			{/* <ComingSoon /> */}
		</div>
	);
};
