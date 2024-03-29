import React, { useState, useEffect } from 'react'
import Hero from '../components/Home/Hero';
import Contact from '../components/Home/Contact';
import SideColumns from '../components/SideColumns';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Layout from '../components/Layout';
import ReactFullPage from '@fullpage/react-fullpage';
import Section from '../components/Section/Section';
import Footer from '../components/Footer';
import { motion } from 'framer-motion/dist/framer-motion';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const anchors = ['hero', 'about', 'projects', 'contact', 'footer'];

export default function Home({ sections }) {

    const [hideScroll, setHideScroll] = useState(true);
    const [activeSection, setActiveSection] = useState('hero');
    const [page, setPage] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [dismissWarning, setDismissWarning] = useState(false);
    const [isPerformance, setIsPerformance] = useState(false);
    const [showToastOn, setShowToastOn] = useState(false);
    const [showToastOff, setShowToastOff] = useState(false);

    const [toastTogglePressed, setToastTogglePressed] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 768 && !dismissWarning) {
            setIsMobile(true);
        }
    }, [dismissWarning])

    useEffect(() => {
        if (isPerformance) {
            setShowToastOn(true);
            setToastTogglePressed(true);
        } else if (toastTogglePressed) {
            setShowToastOff(true);
        }
    }, [isPerformance])

    return (
        <Layout title="Keelan Matthews | Welcome">
            {
                isMobile && !dismissWarning ? (
                    <div className="mobile-message">
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
                        >
                            <h1>Sorry, this site is not mobile friendly yet.</h1>
                            <p>Please view on a landscape device to appreciate all it has to offer.</p>
                            <div className="d-flex">
                                <Button variant="primary" className='mt-2' onClick={() => setDismissWarning(true)}>continue anyway</Button>
                                <Button variant="outline-secondary" className='mt-2 ms-2' href="/keelan-matthews-cv.pdf" target="_blank">download cv</Button>
                            </div>
                        </motion.div>
                    </div>
                )
                    : null
            }
            <SideColumns scrollY={hideScroll} activeSection={activeSection} setIsPerformance={setIsPerformance} page={page}>
                <Col xs={12} sm={10}>
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
                                    <ToastContainer className="p-3" position="top-end">
                                        <Toast onClose={() => setShowToastOn(false)} show={showToastOn} delay={2000} autohide>
                                            <Toast.Body>Animations: <span className="fw-bold">disabled</span></Toast.Body>
                                        </Toast>
                                        <Toast onClose={() => setShowToastOff(false)} show={showToastOff} delay={2000} autohide>
                                        <Toast.Body>Animations: <span className="fw-bold">enabled</span></Toast.Body>
                                        </Toast>
                                    </ToastContainer>
                                    <div className="section">
                                        <Hero visible={true} isPerformance={isPerformance} />
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