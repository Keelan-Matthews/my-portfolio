import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiOutlineMail } from 'react-icons/ai'
import { IoMailOpenSharp } from 'react-icons/io5'
import Navigation from './Navigation'
import { motion } from 'framer-motion/dist/framer-motion'

// framer motion variants that grow the height when visible and shrink when not visible
const lineVariants = {
    visible: { height: '170px' },
    hidden: { height: 0 }
}

const textVariants = {
    visible: { opacity: 1, rotate: 90, y: 0 },
    hidden: { opacity: 0, rotate: 90, y: -30 }
}

export default function SideColumns({ children, scrollY, activeSection, page }) {
    const [hover, setHover] = useState(false)

    return (
        <>
            <Row className='vh-100'>
                <Col xs={12} md={1}>
                    <Row className='d-flex flex-md-column justify-content-between align-items-center ps-4 pt-5 ps-md-0 vh-100'>
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
                        <div className='scroll-down d-flex flex-column justify-content-center align-items-center'>
                            <motion.div
                                variants={textVariants}
                                initial='hidden'
                                animate={scrollY ? 'visible' : 'hidden'}
                                transition={{ duration: 1, ease: 'easeInOut', delay: scrollY ? 2 : 0 }}
                            >
                                <p className="fs-5 pt-3" style={{width: '200px', textAlign: 'center'}}>scroll down</p>
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
                    </Row>
                </Col>
            </Row>
        </>
    )
}
