import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiOutlineMail } from 'react-icons/ai'
import { IoMailOpenSharp } from 'react-icons/io5'
import Navigation from './Navigation'
import { motion } from 'framer-motion/dist/framer-motion'
import { Link } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }

const lineVariants = {
    visible: { height: '170px' },
    hidden: { height: 0 }
}

const textVariants = {
    visible: { opacity: 1, rotate: 90, y: 0 },
    hidden: { opacity: 0, rotate: 90, y: -30 }
}

const socialVariants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 50 }   
}

export default function SideColumns({ children, scrollY, activeSection, page, entered = false }) {
    const [hover, setHover] = useState(false)

    return (
        <>
            <Row className='vh-100'>
                <Col xs={12} md={1}>
                    <Row className='d-flex flex-md-column justify-content-between align-items-center ps-4 pt-5 ps-md-0 vh-100'>
                        {
                            entered ?
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={transition}
                                    className='d-flex justify-content-center'
                                >
                                    <Link to={`/#${activeSection}`} className="text-dark w-50">
                                        <BiArrowBack size={37} />
                                    </Link>
                                </motion.div>
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

                        <Navigation activeSection={activeSection} />
                        <div className="d-none d-md-block"></div>
                    </Row>
                </Col>
                {children}
                <Col xs={2} md={1}>
                    <Row className="d-flex flex-column justify-content-between align-items-center vh-100 pt-5">
                        <div className="page-number">
                            <p className='fs-1'>0{page}</p>
                        </div>
                        <div className={`scroll-down d-flex flex-column justify-content-center align-items-center ${entered ? 'd-none' : ''}`}>
                            <motion.div
                                variants={textVariants}
                                initial='hidden'
                                animate={scrollY ? 'visible' : 'hidden'}
                                transition={{ duration: 1, ease: 'easeInOut', delay: scrollY ? 2 : 0 }}
                            >
                                <p className="fs-5 pt-3" style={{ width: '200px', textAlign: 'center' }}>scroll down</p>
                            </motion.div>

                            <motion.div
                                variants={lineVariants}
                                initial='hidden'
                                animate={scrollY ? 'visible' : 'hidden'}
                                transition={{ duration: 1, ease: 'easeInOut', delay: scrollY ? 3 : 0 }}
                                className="mt-5 scroll-line"
                            >
                            </motion.div>
                        </div>
                        <div className={`d-flex flex-column ${activeSection === 'footer' ? '' : 'd-none'}`}>
                            <motion.a 
                                variants={socialVariants}
                                initial='hidden'
                                animate={activeSection === 'footer' ? 'visible' : 'hidden'}
                                transition={{...transition, delay: 0.2}}
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.2, ease: 'easeInOut' },
                                  }}
                                href="https://github.com/Keelan-Matthews" 
                                className="text-dark mb-3"
                            >
                                <BsGithub size={30} />
                            </motion.a>
                            <motion.a 
                                variants={socialVariants}
                                initial='hidden'
                                animate={activeSection === 'footer' ? 'visible' : 'hidden'}
                                transition={{...transition, delay: 0.4}}
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.2, ease: 'easeInOut' },
                                  }}
                                href="https://www.linkedin.com/in/keelan-matthews-645b13201/" 
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
