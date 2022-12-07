import React, { useState } from 'react'
import Hero from '../components/Home/Hero';
import Contact from '../components/Home/Contact';
import SideColumns from '../components/SideColumns';
import Col from 'react-bootstrap/Col';
import Layout from '../components/Layout';
import ReactFullPage from '@fullpage/react-fullpage';
import Section from '../components/Section';
import Footer from '../components/Footer';

const anchors = ['hero', 'about', 'projects', 'contact', 'footer'];

export default function Home({ sections }) {

    const [hideScroll, setHideScroll] = useState(true);
    const [activeSection, setActiveSection] = useState('hero');
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [modelLoading, setModelLoading] = useState(true);

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
                            } else if (destination.index === 4) {
                                setActiveSection('footer');
                            }

                            setPage(destination.index);
                            setHideScroll(destination.index === 0);
                        }}
                        render={({ state, fullpageApi }) => {

                            return (
                                <ReactFullPage.Wrapper>
                                    <div className="section">
                                        <Hero visible={!loading} setModelLoading={setModelLoading} />
                                    </div>
                                    {
                                        sections.map((section, index) => {
                                            return (
                                                <div className="section" key={index}>
                                                    <Section visible={page === index + 1} {...section} />
                                                </div>
                                            )
                                        })
                                    }
                                    <div className="section">
                                        <Contact visible={page === 3 || page === 4} />
                                    </div>
                                    <div className="section fp-auto-height">
                                        <Footer scrollToTop={() => fullpageApi.moveTo(1)} />
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