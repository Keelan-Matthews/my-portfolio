import React, { useState } from 'react';
import Layout from './components/Layout';
import SideColumns from './components/SideColumns';
import Col from 'react-bootstrap/Col';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';

function App() {
	// const [scrollY, setScrollY] = useState(false);
	// const [hideScroll, setHideScroll] = useState(false);
	// const [activeSection, setActiveSection] = useState('hero');
	// const [page, setPage] = useState(0);

	// const overrideScrollY = (flag) => {
	// 	setScrollY(flag);
	// 	setHideScroll(flag);
	// }

	// const handleScroll = (e) => {
	// 	setHideScroll(e.target.scrollTop < 100)
	// }

	return (
		<Layout title="Keelan Matthews | Welcome">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/projects" element={<ProjectPage />} />
			</Routes>
		</Layout>
	);
}

export default App;
