import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import { AnimatePresence } from 'framer-motion/dist/framer-motion';

function App() {

	const sections = [
		{
			japanese: "書誌",
			circleVar: 1,
			title: "About Me",
			cta: "learn more",
			desc: "development through creativity"
		},
		{
			japanese: "事業",
			circleVar: 2,
			title: "Projects",
			cta: "catalogue",
			desc: "view my top websites"
		}
	]
	return (
		<AnimatePresence mode='wait'>
			<Routes>
				<Route path="/" element={<Home sections={sections} />} />
				<Route path="/about" element={<AboutPage section={sections[0]} />} />
				<Route path="/projects" element={<ProjectPage section={sections[1]} />} />
			</Routes>
		</AnimatePresence>
	);
}

export default App;
