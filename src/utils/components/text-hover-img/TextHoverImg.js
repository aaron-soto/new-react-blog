import meArmy from '../../../assets/images/me-army.jpg';

import './TextHoverImg.scss';

export const TextHoverImg = ({ children }) => {
	return (
		<span>
			<span class='hiddentxt'>
				{/* <a href='https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg'> */}
				{children}
				{/* </a> */}
			</span>
			<span class='hiddenimg'>
				<img src={meArmy} width='250' />
			</span>
		</span>
	);
};
