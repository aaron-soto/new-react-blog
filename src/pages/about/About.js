import { HashLink as Link } from 'react-router-hash-link';

import { RiLinksLine } from 'react-icons/ri';
import { Helmet } from 'react-helmet';
import { useAnalyticsEventTracker } from 'utils/analytics/useAnalyticsEventTracker';
import { TopTracks } from 'components/spotify/TopTracks';
import ImgME from 'assets/me.jpg';

import meArmy from 'assets/images/me-army.jpg';

import './about.scss';
import { TextHoverImg } from 'utils/components/text-hover-img/TextHoverImg';
import { HtmlIcon } from 'assets/icons/HtmlIcon';
import { CssIcon } from 'assets/icons/CssIcon';
import { JavascriptIcon } from 'assets/icons/JavascriptIcon';
import { ScssIcon } from 'assets/icons/ScssIcon';
import { ReactIcon } from 'assets/icons/ReactIcon';
import { NodeIcon } from 'assets/icons/NodeIcon';
import { FigmaIcon } from 'assets/icons/FigmaIcon';
import { VsCodeIcon } from 'assets/icons/VsCodeIcon';
import { GitIcon } from 'assets/icons/GitIcon';
import { GithubIcon } from 'assets/icons/GithubIcon';
import { AdobeIcon } from 'assets/icons/AdobeIcon';
import { OfficeIcon } from 'assets/icons/OfficeIcon';
import { PostmanIcon } from 'assets/icons/PostmanIcon';
import { CodepenIcon } from 'assets/icons/CodepenIcon';
import { FirebaseIcon } from 'assets/icons/FirebaseIcon';
import { DockerIcon } from 'assets/icons/DockerIcon';
import { MaterialIcon } from 'assets/icons/MaterialIcon';
import { PrettierIcon } from 'assets/icons/PrettierIcon';
import { DesignerIcon } from 'assets/icons/DesignerIcon';
import { SvgIcon } from 'utils/components/SvgIcon';

export const About = () => {
	const gaEventTracker = useAnalyticsEventTracker('About Page');

	const handleResumeDownload = () => {
		gaEventTracker('resume-download');
	};
	return (
		<>
			<Helmet>
				<meta charSet='utf-8' />
				<title>Aaron Soto | About</title>
			</Helmet>
			<div className='container'>
				<div className='page-header'>
					<h1>About Me</h1>
					<p className='description'>
						Software engineer, open-sourcerer, carpenter, adrenaline junkie.
					</p>
				</div>
			</div>

			<div className='container'>
				<div className='me-img' src={ImgME}></div>
			</div>

			<div className='container content'>
				<p>
					Hey, I'm Aaron! I'm a software developer working remote in Arizona.
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
				<Link className='header-link' to='/about#my-resume'>
					<h2 id='my-resume'>My Resume</h2>
				</Link>

				<p>
					Checkout my resume{' '}
					<span onClick={handleResumeDownload}>
						<a href='https://docs.google.com/document/d/1V5IDPwpYZEsDaibjKotqvt-TdKVZSIuCjFCJJLvIoBo/edit?usp=sharing'>
							here
						</a>
					</span>
					.
				</p>
			</div>
			<div className='container'>
				<Link className='header-link' to='/about#my-resume'>
					<h2 id='my-resume'>My Tools</h2>
				</Link>

				<p>These are some of the tools that I use everyday.</p>

				<div className='row skills-icons'>
					<SvgIcon>
						<HtmlIcon />
					</SvgIcon>
					<SvgIcon>
						<CssIcon />
					</SvgIcon>
					<SvgIcon>
						<JavascriptIcon />
					</SvgIcon>
					<SvgIcon>
						<ScssIcon />
					</SvgIcon>
					<SvgIcon>
						<ReactIcon />
					</SvgIcon>
					<SvgIcon>
						<NodeIcon />
					</SvgIcon>
					<SvgIcon>
						<FigmaIcon />
					</SvgIcon>
					<SvgIcon>
						<VsCodeIcon />
					</SvgIcon>
					<SvgIcon>
						<GitIcon />
					</SvgIcon>
					<SvgIcon>
						<GithubIcon />
					</SvgIcon>
					<SvgIcon>
						<AdobeIcon />
					</SvgIcon>
					<SvgIcon>
						<OfficeIcon />
					</SvgIcon>
					<SvgIcon>
						<PostmanIcon />
					</SvgIcon>
					<SvgIcon>
						<CodepenIcon />
					</SvgIcon>
					<SvgIcon>
						<FirebaseIcon />
					</SvgIcon>
					<SvgIcon>
						<DockerIcon />
					</SvgIcon>
					<SvgIcon>
						<MaterialIcon />
					</SvgIcon>
					<SvgIcon>
						<PrettierIcon />
					</SvgIcon>
					<SvgIcon>
						<DesignerIcon />
					</SvgIcon>
				</div>
			</div>

			<div className='container'>
				<Link className='header-link' to='/about#spotify-top'>
					<h2 id='spotify-top'>My Top Spotify Songs</h2>
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
					<h2 id='random-facts'>Random Facts</h2>
				</Link>

				<ul className='simple-list'>
					<li>
						I served in the{' '}
						<TextHoverImg img={meArmy}>
							Army as a Sgt for Ranger Regiment.
						</TextHoverImg>
					</li>
					<li>I have jumped out of an airplane more times than I can count.</li>
					<li>I recently started a bodybuilding journey</li>
					<li>I have visited over 30 different countries</li>
					<li>My best trivia category is anything movies</li>
				</ul>
			</div>
		</>
	);
};
