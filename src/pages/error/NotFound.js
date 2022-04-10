import { Link } from 'react-router-dom';

export const NotFound = () => {
	return (
		<div className='not-found'>
			<div className='container'>
				<div className='page-header'>
					<h1>Page Not Found</h1>
					<p className='description'>
						That page does not exist. Sorry about that!
					</p>
					<Link className='btn-primary' to='/'>
						Return Home
					</Link>
				</div>
			</div>
		</div>
	);
};
