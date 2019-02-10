import React from 'react';

const About = () => {
	return (
		<div className="about-section">
			<div className="header">
				<h1>About</h1>
				<hr />
			</div>

			<div className="about-content">
				<div className="profile-pic">
					<img src="https://photos.app.goo.gl/RPJNTjt4rc74DmqbA" alt="pic" />
				</div>
				<div className="bio">
					<div className="profile">
						<div className="profile-header">
							<h2>Who am I?</h2>
						</div>
						<div className="profile-content">
							<p>
								I'm a skilled Software Developer with Front-End development
								experience using JavaScript,
								<span>HTML5, CSS, Ractjs, and LESS precompiler</span>. I also
								posess Back-end experience using
								<span> Node, Mongo, Express, and JWT.</span>
							</p>
							<br />
							<p>
								I have the unique background that combines real-world
								entrepreneurial business experience and immersive technical
								training to transform concepts into practical applications for
								business optimization.
							</p>
							<br />
							<p>
								Another attribute is my ability to solve difficult coding
								challenges and I can work effectively and productively within
								tight deadlines as an individual contributor and as a valued
								member of a team.
							</p>

							<br />
							<p>
								I have always been heavily invested in personal and professional
								development, mastering new languages, platforms, tools, and
								applications by completing the Lambda School Computer Science &
								Software Engineering Academy Program and Hack Reactor Prep
								Immersive Boot Camp.
							</p>
						</div>
					</div>
					<div className="skills-content">
						<div className="bar">
							<div className="skill-container">
								<div className="tag">
									<span>HTML</span>
								</div>
								<div className="skills html">90%</div>
							</div>
						</div>

						<div className="bar">
							<div className="skill-container">
								<div className="tag">
									<span>CSS</span>
								</div>
								<div className="skills css">80%</div>
							</div>
						</div>
						<div className="bar">
							<div className="skill-container">
								<div className="tag">
									<span>React</span>
								</div>
								<div className="skills react">75%</div>
							</div>
						</div>
						<div className="bar">
							<div className="skill-container">
								<div className="tag">
									<span>MongoDB</span>
								</div>
								<div className="skills mongo">60%</div>
							</div>
						</div>
						<div className="bar">
							<div className="skill-container">
								<div className="tag">
									<span>JavaScript</span>
								</div>
								<div className="skills js">85%</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
