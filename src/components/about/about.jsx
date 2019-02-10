import React from 'react';

const About = () => {
	return (
		<div>
			<div className="container">
				<div className="about-section">
					<div className="header">
						<h1>About</h1>
						<hr />
					</div>

					<div className="about-content">
						<div className="top-content">
							<div className="card">
								<div className="img" />
								<div className="title">
									<h2>Fast</h2>
								</div>
								<div className="text">
									<p>
										Fast load times and lag free interaction, my highest
										priority.
									</p>
								</div>
							</div>

							<div className="card">
								<div className="img" />
								<div className="title">
									<h2>Responsive</h2>
								</div>
								<div className="text">
									<p>My layouts will work on any device, big or small.</p>
								</div>
							</div>
							<div className="card">
								<div className="img" />
								<div className="title">
									<h2>Intuitive</h2>
								</div>
								<div className="text">
									<p>Strong preference for easy to use, intuitive UX/UI.</p>
								</div>
							</div>
							<div className="card">
								<div className="img" />
								<div className="title">
									<h2>Dynamic</h2>
								</div>
								<div className="text">
									<p>
										Websites don't have to be static, I love making pages come
										to life.
									</p>
								</div>
							</div>
						</div>

						<div className="bio">
							<div className="profile">
								<div className="profile-pic" />
								<div className="profile-header">
									<h2>Who am I?</h2>
								</div>
								<div className="profile-content">
									<p>
										I'm the Full-stack Developer/ Freelancer based out of
										Sarasota FL. I have serious passion for UI effects,
										animations and creating intuitive, dynamic user experiences.
										<span> Let's make something special. </span>
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
			</div>
		</div>
	);
};

export default About;
