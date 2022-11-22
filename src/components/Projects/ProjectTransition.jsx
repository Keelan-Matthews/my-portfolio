import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { motion } from 'framer-motion/dist/framer-motion'

const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }

export default function ProjectTransition() {
    const [enter, setEnter] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setEnter(true)
        }, 1000)
    }, [])

    return (
        <div className="section">
            <Row className="d-flex align-items-center">
                <Col xs={12} md={6} className="d-flex position-relative justify-content-end">
                    <p className='fs-4 rotate'>事業</p>
                    <motion.div 
                        initial={{ right: '-5%', bottom: '-5%' }}
                        animate={{ right: '-5%', bottom: '-1%' }}
                        transition={transition}
                        className='bg-primary rounded-circle circle-container position-absolute'
                    ></motion.div>
                    <motion.img
                        initial={{height: '750px', width: '550px'}}
                        animate={{width: '730px'}}
                        transition={transition}
                        src="/images/projects.webp"
                        className="image-crop"
                        alt=""
                    >
                    </motion.img>
                </Col>
                <Col xs={12} md={6} className="move-down-2">
                    <div>
                        <div className='p-4'></div>
                        <div className="bigger-text">
                            <h2>Projects</h2>
                        </div>
                        <p className="fs-2 hide-slogan">view my top websites</p>
                    </div>

                    <div className="border-black-1 fs-5 mt-4 d-inline-block button-to-scroll p-2 px-3">
                        <span className='text-to-scroll'>catalogue</span>
                    </div>
                    <div className='scroll-down d-flex flex-column align-items-center w-25'>
                        <p className={`fs-5 scroll-down-text-transition ${enter ? 'visible' : ''}`}>scroll down</p>
                        <div className={`mt-5 scroll-line-transition ${enter ? 'visible' : ''}`}></div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
