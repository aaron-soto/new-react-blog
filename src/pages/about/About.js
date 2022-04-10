import { HashLink as Link } from 'react-router-hash-link';

import { RiLinksLine } from 'react-icons/ri';

import { TopTracks } from 'components/spotify/TopTracks';

export const About = () => {
	return (
		<>
			<div className='container'>
				<div className='container'>
					<div className='page-header'>
						<h1>About Me</h1>
						<p className='description'>
							Software engineer, open-sourcerer, carpenter, adrenaline junkie.
						</p>
					</div>
				</div>
			</div>

			<div className='container content'>
				<p>
					Hey, I'm Aaron! I'm a software developer working in remote in Arizona.
					Welcome to my spot on the web for projects I've created, tutorials
					I've written, and anything else I want to show the world or just talk
					to myself!
				</p>
				<p>
					Check out the projects page to see a highlight of the open-source
					projects I've made, and blog to see everything I've written. I hope to
					get to connect and meet with some of you! Don't be shy!
				</p>
			</div>

			<div className='container'>
				<Link className='header-link' to='/about#what-im-doing'>
					<RiLinksLine className='icon' />
					<h2 id='what-im-doing'>My Resume</h2>
				</Link>

				<p>
					Checkout my resume{' '}
					<a href='https://docs.google.com/document/d/1V5IDPwpYZEsDaibjKotqvt-TdKVZSIuCjFCJJLvIoBo/edit?usp=sharing'>
						here
					</a>
					.
				</p>
			</div>

			<div className='container'>
				<Link className='header-link' to='/about#what-im-doing'>
					<RiLinksLine className='icon' />
					<h2 id='what-im-doing'>My Top Spotify Songs</h2>
				</Link>

				<p>
					Checkout my{' '}
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='https://open.spotify.com/user/12159172546'
					>
						Spotify Profile
					</a>
				</p>

				<TopTracks />
			</div>

			<div className='container'>
				<Link className='header-link' to='/about#what-im-doing'>
					<RiLinksLine className='icon' />
					<h2 id='what-im-doing'>What I'm doing right now</h2>
				</Link>
				<ul className='simple-list'>
					<li>Building up my wood workshop</li>
					<li>Looking for new video games to play</li>
					<li>Working at Allata</li>
					<li>Writing about GraphQL</li>
					<li>Learning new Javascript techniques</li>
				</ul>
			</div>

			<div className='container'>
				<Link className='header-link' to='/about#connect'>
					<RiLinksLine className='icon' />
					<h2 id='connect'>Connect</h2>
				</Link>
				<p>
					You can contact me by email at aaron.m.soto1@gmail.com to say hi! I
					always appreciate meeting new people.
				</p>

				<ul className='simple-list'>
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='https://github.com/aaron-soto'
					>
						<li>Github</li>
					</a>
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='https://www.linkedin.com/in/aaron-soto1/'
					>
						<li>Linkedin</li>
					</a>
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='https://instagram.com/sotobaggins1'
					>
						<li>Instagram</li>
					</a>
				</ul>
			</div>

			<div className='container'>
				<Link className='header-link' to='/about#random-facts'>
					<RiLinksLine className='icon' />
					<h2 id='random-facts'>Random Facts</h2>
				</Link>

				<ul className='simple-list'>
					<li>I built my first website in 1998 on GeoCities</li>
					<li>
						Two of my favorite book series are The Expanse and A Song of Ice and
						Fire
					</li>
					<li>I own at least one accordion</li>
					<li>
						I once hopped on a one-way flight to Scotland and traveled Europe
						for several months
					</li>
					<li>I served in the Army as a Sgt for Ranger Regiment.</li>
					<li>My best trivia category is 80's music</li>
				</ul>
			</div>
		</>
	);
};
