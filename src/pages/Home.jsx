import React, { useEffect, useState } from 'react'
import Hero from '../components/Home/Hero';
import AboutMe from '../components/Home/AboutMe';
import Projects from '../components/Home/Projects';
import { useInView } from "react-intersection-observer";
import SideColumns from '../components/SideColumns';
import Col from 'react-bootstrap/Col';
import Layout from '../components/Layout';

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
        <Layout title="Keelan Matthews | Welcome">
            <SideColumns scrollY={hideScroll} activeSection={activeSection} page={page}>
                <Col xs={10} className={scrollY ? 'scrollable pt-5' : 'pt-5'} onScroll={handleScroll}>
                    <div className="scroll-child">
                        <Hero innerRef={ref1} setScrollY={overrideScrollY} />
                    </div>
                    <div className="scroll-child">
                        <AboutMe innerRef={ref2} />
                    </div>
                    <div className="scroll-child">
                        <Projects innerRef={ref3} />
                    </div>
                </Col>
            </SideColumns>
        </Layout>
    )
}
