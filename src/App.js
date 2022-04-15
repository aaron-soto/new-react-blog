import ReactGA from 'react-ga';
import { useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import { Navbar } from 'components/navbar/Navbar';
import { About } from 'pages/about/About';
import { Blog } from 'pages/blog/Blog';
import { Home } from 'pages/home/Home';
import { Projects } from 'pages/projects/Projects';
import { Contact as ContactPage } from 'pages/contact/Contact';
import { Footer } from 'components/footer/Footer';
import { NotFound } from 'pages/error/NotFound';
import { ScrollBar } from 'utils/components/ScrollBar';
import { BackToTop } from 'utils/components/BackToTop';
import { Contact } from 'components/contact/Contact';
import { ComingSoon } from 'pages/error/ComingSoon';
import { ScrollAfterClick } from 'utils/components/ScrollAfterClick';
import { Weather } from 'pages/weather/Weather';

const TRACKING_ID = 'UA-177845106-2';
ReactGA.initialize(TRACKING_ID);

function App() {
	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

	return (
		<div className='App'>
			<ScrollAfterClick />
			<Navbar />
			<ScrollBar />
			<BackToTop />
			<Routes>
				<Route path='*' element={<NotFound />} />
				<Route path='/' element={<Home />} />
				<Route path='/blog' element={<Blog />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<ContactPage />} />
				<Route path='/weather' element={<Weather />} />
				<Route path='/coming-soon' element={<ComingSoon />} />
			</Routes>
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
