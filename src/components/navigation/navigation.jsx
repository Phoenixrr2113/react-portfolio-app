import React from 'react';

const Navigation = () => {
	return (
		<div>
			<div class="navigation">
				<div class="nav-content">
					<li class="selected">Home</li>
					<li>About</li>
					<li>Portfolio</li>
					<li>Contact</li>
				</div>
				<div class="progress-container">
					<div class="scroll-progress-bar" />
				</div>
			</div>
		</div>
	);
};

export default Navigation;
