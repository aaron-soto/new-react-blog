import { Link } from 'react-router-dom';

export const ComingSoon = () => {
	return (
		<div className='not-found'>
			<div className='container'>
				<div className='page-header'>
					<h1>Page under Construction</h1>
					<p className='description'>Please check back soon!</p>
					<Link className='btn-primary' to='/'>
						Return Home
					</Link>
				</div>
			</div>
		</div>
	);
};
