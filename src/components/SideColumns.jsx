import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiOutlineMail } from 'react-icons/ai'
import { IoMailOpenSharp } from 'react-icons/io5'
import Navigation from './Navigation'
import { motion, useAnimation } from 'framer-motion/dist/framer-motion'
import { Link } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { sideColumnTransition, sideColumnLineVariants, sideColumnTextVariants, socialVariants, pageVariants, mailVariants } from './animations/customVariants';

export default function SideColumns({ children, scrollY, activeSection, page, entered = false, caseStudy = false }) {
    const [hover, setHover] = useState(false)

    const ctrls = useAnimation()
    const footerCtrls = useAnimation()

    useEffect(() => {
        ctrls.start(scrollY ? 'visible' : 'hidden')
        footerCtrls.start(activeSection === 'footer' ? 'visible' : 'hidden')
    }, [scrollY, activeSection])

    return (
        <>
            <Row className='vh-100'>
                <Col xs={1} className="d-none d-sm-block">
                    <Row className='d-flex flex-md-column justify-content-between align-items-center ps-4 pt-5 ps-md-0 vh-100'>
                        <motion.div
                            variants={mailVariants}
                            initial='hidden'
                            animate='visible'
                            transition={{...sideColumnTransition, delay: 0.4}}
                            className='d-flex justify-content-center'
                        >
                            {
                                entered ?
                                    <Link to={`/${caseStudy ? 'projects/' : ''}#${activeSection}`} className="text-dark w-50">
                                        <BiArrowBack size={37} />
                                    </Link>
                                    :
                                    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="d-flex justify-content-center">
                                        {
                                            hover ?
                                                <IoMailOpenSharp size={37} className="envelope" onClick={() => {
                                                    if (window.fullpage_api)
                                                        window.fullpage_api.moveTo(4)
                                                }} />
                                                :
                                                <AiOutlineMail size={37} className="envelope" />
                                        }
                                    </div>
                            }
                        </motion.div>

                        <Navigation activeSection={activeSection} />
                        <div className="d-none d-md-block"></div>
                    </Row>
                </Col>
                {children}
                <Col xs={1} className="d-none d-sm-block">
                    <Row className="d-flex flex-column justify-content-between align-items-center vh-100 pt-5">
                        <motion.div 
                            variants={pageVariants}
                            initial={entered ? 'visible' : 'hidden'}
                            animate='visible'
                            transition={{...sideColumnTransition, delay: 0.5}}
                            className="page-number"
                        >
                            <p className='fs-1'>0{page}</p>
                        </motion.div>
                        <div className={`scroll-down d-flex flex-column justify-content-center align-items-center ${entered ? 'd-none' : ''}`}>
                            <motion.div
                                variants={sideColumnTextVariants}
                                initial='hidden'
                                animate={ctrls}
                                transition={{ duration: 1, ease: 'easeInOut', delay: scrollY ? 2 : 0 }}
                            >
                                <p className="fs-5 pt-3" style={{ width: '200px', textAlign: 'center' }}>scroll down</p>
                            </motion.div>

                            <motion.div
                                variants={sideColumnLineVariants}
                                initial='hidden'
                                animate={ctrls}
                                transition={{ duration: 1, ease: 'easeInOut', delay: scrollY ? 3 : 0 }}
                                className="mt-5 scroll-line"
                            >
                            </motion.div>
                        </div>
                        <div className={`d-flex flex-column ${activeSection === 'footer' ? '' : 'd-none'}`}>
                            <motion.a
                                variants={socialVariants}
                                initial='hidden'
                                animate={footerCtrls}
                                transition={{ ...sideColumnTransition, delay: 0.2 }}
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.2, ease: 'easeInOut' },
                                }}
                                href="https://github.com/Keelan-Matthews"
                                target="_blank"
                                className="text-dark mb-3"
                            >
                                <BsGithub size={30} />
                            </motion.a>
                            <motion.a
                                variants={socialVariants}
                                initial='hidden'
                                animate={footerCtrls}
                                transition={{ ...sideColumnTransition, delay: 0.4 }}
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.2, ease: 'easeInOut' },
                                }}
                                href="https://www.linkedin.com/in/keelan-matthews/"
                                target="_blank"
                                className="text-dark mb-5"
                            >
                                <BsLinkedin size={30} />
                            </motion.a>
                        </div>
                    </Row>
                </Col>
            </Row>
        </>
    )
}