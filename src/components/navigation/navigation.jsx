import React, { Component } from 'react';

class Navigation extends Component {
	constructor(props) {
		super(props);

		this.state = {};

		this.handleScroll = this.handleScroll.bind(this);
	}

	handleScroll() {
		this.setState({ scroll: window.scrollY });
	}

	componentDidMount() {
		const el = document.querySelector('nav');
		this.setState({ top: el.offsetTop, height: el.offsetHeight });
		window.addEventListener('scroll', this.handleScroll);
	}

	componentDidUpdate() {
		this.state.scroll > this.state.top
			? (document.body.style.paddingTop = `${this.state.height}px`)
			: (document.body.style.paddingTop = 0);
	}
	render() {
		return (
			<nav className={this.state.scroll > this.state.top ? 'sticky' : ''}>
				<div className="navigation">
					<div className="nav-content">
						<div className="selected links">Home</div>
						<div className="links">About</div>
						<div className="links">Portfolio</div>
						<div className="links">Contact</div>
					</div>
					<div className="progress-container">
						<div className="scroll-progress-bar" />
					</div>
				</div>
			</nav>
		);
	}
}

export default Navigation;
