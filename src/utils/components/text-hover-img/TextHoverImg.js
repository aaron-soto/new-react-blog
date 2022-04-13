import './TextHoverImg.scss';

export const TextHoverImg = ({ img, children }) => {
	return (
		<span>
			<span className='hiddentxt'>
				{/* <a href='https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg'> */}
				{children}
				{/* </a> */}
			</span>
			<span className='hiddenimg'>
				<img src={img} width='250' />
			</span>
		</span>
	);
};
