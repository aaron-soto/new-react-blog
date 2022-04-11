import ReactGA from 'react-ga';

import { Route, Routes } from 'react-router-dom';
import { Navbar } from 'components/navbar/Navbar';
import { About } from 'pages/about/About';
import { Blog } from 'pages/blog/Blog';
import { Home } from 'pages/home/Home';
import { Projects } from 'pages/projects/Projects';
import { Footer } from 'components/footer/Footer';
import { NotFound } from 'pages/error/NotFound';
import { ScrollBar } from 'utils/components/ScrollBar';
import { BackToTop } from 'utils/components/BackToTop';

const TRACKING_ID = 'UA-177845106-2';
ReactGA.initialize(TRACKING_ID);

function App() {
	return (
		<div className='App'>
			<Navbar />
			<ScrollBar />
			<BackToTop />
			<Routes>
				<Route path='*' element={<NotFound />} />
				<Route path='/' element={<Home />} />
				<Route path='/blog' element={<Blog />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/about' element={<About />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
