import { Route, Routes } from 'react-router-dom';
import { Navbar } from 'components/navbar/Navbar';
import { About } from 'pages/about/About';
import { Blog } from 'pages/blog/Blog';
import { Home } from 'pages/home/Home';
import { Projects } from 'pages/projects/Projects';
import { Footer } from 'components/footer/Footer';
import { NotFound } from 'pages/error/NotFound';

function App() {
	return (
		<div className='App'>
			<Navbar />
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
