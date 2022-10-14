import React, { useState } from 'react';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Layout from './components/Layout';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiOutlineMail } from 'react-icons/ai'
import Navigation from './components/Navigation'

function App() {
	const [scrollY, setScrollY] = useState(false);

	return (
		<Layout title="Keelan Matthews | Welcome">
			<Row className='pt-md-5 vh-100'>
				<Col xs={12} md={1} className='d-flex flex-md-column justify-content-between align-items-center ps-4 pt-3 p-md-0'>
					<AiOutlineMail size={37} />
					<Navigation />
					<div className="d-none d-md-block"></div>
				</Col>
				<Col xs={10} className={scrollY ? 'scrollable' : ''}>
					<Hero setScrollY={setScrollY} />
					<AboutMe />
				</Col>
				<Col xs={2} md={1} className="d-flex flex-column justify-content-between align-items-center h-100">
					<div className="page-number">
						<p className='fs-1'>00</p>
					</div>
					<div className='scroll-down d-flex flex-column justify-content-center align-items-center'>
						<p className={`fs-5 scroll-down-text ${scrollY ? 'visible' : ''}`}>scroll down</p>
						<div className={`mt-5 scroll-line ${scrollY ? 'visible' : ''}`}></div>
					</div>
				</Col>
			</Row>
		</Layout>
	);
}

export default App;
