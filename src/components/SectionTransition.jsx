import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { motion } from 'framer-motion/dist/framer-motion'

const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }

export default function SectionTransition({ japanese, circleVar, title, cta, desc }) {
    const [enter, setEnter] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setEnter(true)
        }, 1000)
    }, [])

    const toImage = (title) => title.toLowerCase().replace(/ /g, '-') + '.webp';

    return (
        <Row className="d-flex align-items-center">
            <Col xs={12} md={6} className="d-flex position-relative justify-content-end">
                <p className='fs-4 rotate'>{japanese}</p>
                <motion.div
                    initial={ circleVar === 1 ? { left: '3%', bottom: '5%' } : { right: '-5%', bottom: '-5%' }}
                    animate={ circleVar === 1 ? { left: '-5%', bottom: '5%' } : { right: '-5%', bottom: '-1%' }}
                    transition={transition}
                    className='bg-primary rounded-circle circle-container position-absolute'
                ></motion.div>
                <motion.img
                    initial={{ height: '750px', width: '550px' }}
                    animate={{ width: '730px' }}
                    transition={transition}
                    src={`/images/${toImage(title)}`}
                    className="image-crop"
                    alt=""
                >
                </motion.img>
            </Col>
            <Col xs={12} md={6}>
                <div>
                    <div className='p-4'></div>
                    <div className="bigger-text">
                        <h2>{title}</h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 1, y: 0 }}
                        animate={{ opacity: 0, y: -10 }}
                        transition={{ ...transition, delay: 0.3 }}
                        className="fs-2"
                    >
                        {desc}
                    </motion.p>
                </div>

                <div className="border-black-1 fs-5 mt-4 d-inline-block button-to-scroll p-2 px-3">
                    <span className='text-to-scroll'>{cta}</span>
                </div>
                <div className='scroll-down d-flex flex-column align-items-center w-25'>
                    <p className={`fs-5 scroll-down-text-transition ${enter ? 'visible' : ''}`}>scroll down</p>
                    <div className={`mt-5 scroll-line-transition ${enter ? 'visible' : ''}`}></div>
                </div>
            </Col>
        </Row>
    )
}