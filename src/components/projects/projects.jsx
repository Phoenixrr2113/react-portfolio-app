import React from 'react';

const Projects = () => {
	return (
		<div>
			<div className="projects-section">
				<div className="header">
					<h1>Projects</h1>
					<hr />
				</div>

				<div className="section">
					<div className="tabs">
						<div className="tabs-links">
							<div className="tabs-link tabs-link-selected" data-tab="1">
								ALL
							</div>
							<div className="tabs-link" data-tab="2">
								REACT.JS
							</div>
							<div className="tabs-link" data-tab="3">
								HTMLS/CSS
							</div>
							<div className="tabs-link" data-tab="4">
								MONGODB
							</div>
						</div>
						<div className="tabs-items">
							<div className="tabs-item tabs-item-selected" data-tab="1">
								<div className="tabs-item-description">Don’t Panic.</div>
							</div>
							<div className="tabs-item" data-tab="2">
								<div className="tabs-item-description">
									Curiously enough, the only thing that went through the mind of
									the bowl of petunias as it fell was Oh no, not again. Many
									people have speculated that if we knew exactly why the bowl of
									petunias had thought that we would know a lot more about the
									nature of the Universe than we do now.
								</div>
							</div>
							<div className="tabs-item" data-tab="3">
								<div className="tabs-item-description">
									It is known that there are an infinite number of worlds,
									simply because there is an infinite amount of space for them
									to be in. However, not every one of them is inhabited.
									Therefore, there must be a finite number of inhabited worlds.
									Any finite number divided by infinity is as near to nothing as
									makes no odds, so the average population of all the planets in
									the Universe can be said to be zero. From this it follows that
									the population of the whole Universe is also zero, and that
									any people you may meet from time to time are merely the
									products of a deranged imagination.
								</div>
							</div>
							<div className="tabs-item" data-tab="4">
								<div className="tabs-item-description">
									There is a theory which states that if ever anyone discovers
									exactly what the Universe is for and why it is here, it will
									instantly disappear and be replaced by something even more
									bizarre and inexplicable. There is another theory which states
									that this has already happened.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
