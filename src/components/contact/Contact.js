import emailjs from 'emailjs-com';
import { useState } from 'react';
import { useAnalyticsEventTracker } from 'utils/analytics/useAnalyticsEventTracker';
import './contact.scss';

emailjs.init('qH-lH5ITf_eWLiH8p');

export const Contact = () => {
	const gaEventTracker = useAnalyticsEventTracker('Contact Form');

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [emailSent, setEmailSent] = useState(false);

	const submit = () => {
		gaEventTracker(`form-submission`);

		if (name && email && message) {
			const serviceId = 'service_itmaplv';
			const templateId = 'template_016wa0g';
			const userId = 'user_id';
			const templateParams = {
				name,
				email,
				message,
			};

			emailjs
				.send(serviceId, templateId, templateParams)
				.then((response) => console.log(response))
				.then((error) => console.log(error));

			setName('');
			setEmail('');
			setMessage('');
			setEmailSent(true);
		} else {
			alert('Please fill in all fields.');
		}
	};

	const isValidEmail = (email) => {
		const regex =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return regex.test(String(email).toLowerCase());
	};

	return (
		<div className='container' id='contact-form'>
			<div className='page-header contact'>
				<h1>Contact Me</h1>
				<p className='description'>
					Shoot me a message if you have any questions, music recommendations,
					or just want to say hi! I like new friends!
				</p>
			</div>
			{emailSent ? (
				<div className='row'>
					<span className='thank-you'>
						Thank you for your message, I will get back to you ASAP!
					</span>
				</div>
			) : (
				<>
					<div className='row'>
						<input
							className='contact-input'
							type='text'
							placeholder='Your Name'
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>

						<input
							className='contact-input'
							type='email'
							placeholder='Your email address'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className='row'>
						<div className='col'>
							<textarea
								className='contact-input'
								placeholder='Your message'
								value={message}
								onChange={(e) => setMessage(e.target.value)}
							></textarea>
							<button className='contact-input' onClick={submit}>
								Send Message
							</button>
						</div>
					</div>
				</>
			)}
		</div>
	);
};
