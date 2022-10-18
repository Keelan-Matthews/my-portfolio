import React, { useEffect } from 'react'
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import { useInView } from "react-intersection-observer";

export default function Home({ setScrollY, setActiveSection, setPage }) {
    const [ref1, InView1] = useInView({
        threshold: 0.5,
    });
    const [ref2, InView2] = useInView({
        threshold: 0.5,
    });
    const [ref3, InView3] = useInView({
        threshold: 0.5,
    });

    useEffect(() => {
        if (InView1) {
            setActiveSection('hero');
            setPage(0);
        } else if (InView2) {
            setActiveSection('about');
            setPage(1);
        } else if (InView3) {
            setActiveSection('projects');
            setPage(2);
        }
    }, [InView1, InView2, InView3, setActiveSection]);

    return (
        <div className="pt-5">
            <Hero innerRef={ref1} setScrollY={setScrollY} />
            <AboutMe innerRef={ref2} />
            <Projects innerRef={ref3} />
        </div>
    )
}
