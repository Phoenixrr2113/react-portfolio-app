import React from 'react';

const Contact = () => {
	return (
		<div>
			<div className="contact-section">
				<div className="header">
					<h1>Contact</h1>
					<hr />
				</div>

				<div className="contact-content">
					<p>Have a question or want to colaberate?</p>
					<form>
						<input type="text" placeholder="Name" />
						<input type="text" placeholder="Enter Email" />
						<textarea placeholder="Your Message" />
						<input type="submit" value="Submit" />
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
