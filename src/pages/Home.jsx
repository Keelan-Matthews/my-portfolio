import React, { useState, useEffect } from 'react'
import Hero from '../components/Home/Hero';
import Contact from '../components/Home/Contact';
import SideColumns from '../components/SideColumns';
import Col from 'react-bootstrap/Col';
import Layout from '../components/Layout';
import ReactFullPage from '@fullpage/react-fullpage';
import Section from '../components/Home/Section';

const anchors = ['hero-section', 'about-section', 'projects-section', 'contact-section'];

export default function Home() {

    const [scrollY, setScrollY] = useState(false);
    const [hideScroll, setHideScroll] = useState(true);
    const [activeSection, setActiveSection] = useState('hero');
    const [page, setPage] = useState(0);

    const overrideScrollY = (flag) => {
        setScrollY(flag);
        setHideScroll(flag);
    }

    return (
        <Layout title="Keelan Matthews | Welcome">
            <SideColumns scrollY={hideScroll} activeSection={activeSection} page={page}>
                <Col xs={10}>
                    <ReactFullPage
                        anchors={anchors}

                        onLeave={(origin, destination) => {
                            if (destination.index === 0) {
                                setActiveSection('hero');
                            } else if (destination.index === 1) {
                                setActiveSection('about');
                            } else if (destination.index === 2) {
                                setActiveSection('projects');
                            } else if (destination.index === 3) {
                                setActiveSection('contact');
                            }

                            setPage(destination.index);
                            setHideScroll(destination.index === 0);
                        }}
                        render={() => {

                            return (
                                <ReactFullPage.Wrapper>
                                    <div className="section">
                                        <Hero setScrollY={overrideScrollY} />
                                    </div>
                                    <div className="section">
                                        <Section visible={page === 1} japanese="書誌" circleVar={1} title="About Me" cta="learn more" desc="development through creativity" />
                                    </div>
                                    <div className="section">
                                        <Section visible={page === 2} japanese="事業" circleVar={2} title="Projects" cta="catalogue" desc="view my top websites" />
                                    </div>
                                    <div className="section">
                                        <Contact visible={page === 3} />
                                    </div>
                                </ReactFullPage.Wrapper>
                            )
                        }}
                    />
                </Col>
            </SideColumns>
        </Layout>
    )
}