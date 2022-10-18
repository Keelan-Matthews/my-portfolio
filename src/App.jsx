import React, { useState } from 'react';
import Layout from './components/Layout';
import SideColumns from './components/SideColumns';
import Col from 'react-bootstrap/Col';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';

function App() {
	const [scrollY, setScrollY] = useState(false);
	const [hideScroll, setHideScroll] = useState(false);
	const [activeSection, setActiveSection] = useState('hero');
	const [page, setPage] = useState(0);

	const overrideScrollY = (flag) => {
		setScrollY(flag);
		setHideScroll(flag);
	}

	const handleScroll = (e) => {
		setHideScroll(e.target.scrollTop < 100)
	}

	return (
		<Layout title="Keelan Matthews | Welcome">
			<SideColumns scrollY={hideScroll} activeSection={activeSection} page={page}>
				<Col xs={10} className={scrollY ? 'scrollable' : ''} onScroll={handleScroll}>
					<Routes>
						<Route path="/" element={<Home setScrollY={overrideScrollY} setActiveSection={setActiveSection} setPage={setPage} />} />
						<Route path="/about" element={<AboutPage />} />
						<Route path="/projects" element={<ProjectPage />} />
					</Routes>
				</Col>
			</SideColumns>
		</Layout>
	);
}

export default App;
