import React, { Component } from 'react';
import Homepage from './components/homepage/homepage';
import Projects from './components/projects/projecgts';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Navigation from './components/navigation/navigation';

import './styles/css/index.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Homepage />
				<Navigation />
				<About />
				<Projects />
				<Contact />
				<Footer />
			</div>
		);
	}
}

export default App;
