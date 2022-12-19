import React, { useEffect, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import NotFound from './pages/NotFound';
import CaseStudy from './pages/CaseStudy';
import { AnimatePresence } from 'framer-motion/dist/framer-motion';
import Cursor from './utils/cursor'

function App() {
	const cursorRef = useRef(null);
	useEffect(() => {
        new Cursor(cursorRef.current)
		// console.clear()
    }, [])

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
			<div className="cursor" ref={cursorRef}>
                <div className="cursor-media">
                    <video 
                        src="/videos/about-me.mp4"
                        preload='auto'
                        autoPlay
                        muted
                        loop
                        id="about-me-video"
                    ></video>
                </div>
            </div>
			<Routes>
				<Route path="/" element={<Home sections={sections} />} />
				<Route path="/about-me" element={<AboutPage section={sections[0]} />} />
				<Route path="/projects" element={<ProjectPage section={sections[1]} />} />
				<Route path="/projects/:slug" element={<CaseStudy />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</AnimatePresence>
	);
}

export default App;
