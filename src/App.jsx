import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import { AnimatePresence } from 'framer-motion/dist/framer-motion';

function App() {
	return (
		<AnimatePresence mode='wait'>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/projects" element={<ProjectPage />} />
			</Routes>
		</AnimatePresence>
	);
}

export default App;
