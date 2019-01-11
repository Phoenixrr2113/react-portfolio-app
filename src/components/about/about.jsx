import React from 'react';

const About = () => {
	return (
		<div>
			<div class="container">
				<div class="about-section">
					<div class="header">
						<h1>About</h1>
						<hr />
					</div>

					<div class="about-content">
						<div class="top-content">
							<div class="card">
								<div class="img" />
								<div class="title">
									<h2>Fast</h2>
								</div>
								<div class="text">
									<p>
										Fast load times and lag free interaction, my highest
										priority.
									</p>
								</div>
							</div>

							<div class="card">
								<div class="img" />
								<div class="title">
									<h2>Responsive</h2>
								</div>
								<div class="text">
									<p>My layouts will work on any device, big or small.</p>
								</div>
							</div>
							<div class="card">
								<div class="img" />
								<div class="title">
									<h2>Intuitive</h2>
								</div>
								<div class="text">
									<p>Strong preference for easy to use, intuitive UX/UI.</p>
								</div>
							</div>
							<div class="card">
								<div class="img" />
								<div class="title">
									<h2>Dynamic</h2>
								</div>
								<div class="text">
									<p>
										Websites don't have to be static, I love making pages come
										to life.
									</p>
								</div>
							</div>
						</div>

						<div class="bio">
							<div class="profile">
								<div class="profile-pic" />
								<div class="profile-header">
									<h2>Who am I?</h2>
								</div>
								<div class="profile-content">
									<p>
										I'm the Full-stack Developer/ Freelancer based out of
										Sarasota FL. I have serious passion for UI effects,
										animations and creating intuitive, dynamic user experiences.
										<span> Let's make something special. </span>
									</p>
								</div>
							</div>
							<div class="skills-content">
								<div class="bar">
									<div class="skill-container">
										<div class="tag">
											<span>HTML</span>
										</div>
										<div class="skills html">90%</div>
									</div>
								</div>

								<div class="bar">
									<div class="skill-container">
										<div class="tag">
											<span>CSS</span>
										</div>
										<div class="skills css">80%</div>
									</div>
								</div>
								<div class="bar">
									<div class="skill-container">
										<div class="tag">
											<span>React</span>
										</div>
										<div class="skills react">75%</div>
									</div>
								</div>
								<div class="bar">
									<div class="skill-container">
										<div class="tag">
											<span>MongoDB</span>
										</div>
										<div class="skills mongo">60%</div>
									</div>
								</div>
								<div class="bar">
									<div class="skill-container">
										<div class="tag">
											<span>JavaScript</span>
										</div>
										<div class="skills js">85%</div>
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
