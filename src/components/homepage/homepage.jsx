import React from 'react';
import SplitText from 'react-pose-text';
import posed from 'react-pose';

import '../../styles/css/index.css';

const Homepage = () => {
	const charPoses = {
		exit: { opacity: 0, x: -100 },
		enter: {
			opacity: 1,
			x: 0,
			delay: ({ charIndex }) => charIndex * 30,
		},
	};

	const Button = posed.div({
		hoverable: true,
		pressable: true,
		init: {
			scale: 1,
		},
		hover: {
			scale: 1.1,
		},
		press: {
			scale: 1.15,
		},
	});

	return (
		<div className="intro-section">
			<div className="heading">
				<h1>
					<SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
						Hello, I'm
					</SplitText>
					<span>
						<SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
							Randy Wilson.
						</SplitText>
					</span>
					<br />
					<SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
						I'm a full-stack web developer.
					</SplitText>
				</h1>
				<Button>
					<div className="button">
						<p>View my work</p>
						<i className="fas fa-arrow-right" />
					</div>
				</Button>
			</div>
		</div>
	);
};

export default Homepage;
