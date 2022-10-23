import React, { useEffect, useState } from 'react'
import Hero from '../components/Home/Hero';
import AboutMe from '../components/Home/AboutMe';
import Projects from '../components/Home/Projects';
import { useInView } from "react-intersection-observer";
import SideColumns from '../components/SideColumns';
import Col from 'react-bootstrap/Col';

export default function Home() {

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
        <div className="overflow-hidden">
            <SideColumns scrollY={hideScroll} activeSection={activeSection} page={page}>
                <Col xs={10} className={scrollY ? 'scrollable' : ''} onScroll={handleScroll}>
                    <div className="pt-5">
                        <Hero innerRef={ref1} setScrollY={overrideScrollY} />
                        <AboutMe innerRef={ref2} />
                        <Projects innerRef={ref3} />
                    </div>
                </Col>
            </SideColumns>
        </div>
    )
}
