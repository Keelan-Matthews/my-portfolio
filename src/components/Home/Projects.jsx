import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion/dist/framer-motion'
import TextReveal from '../animations/TextReveal'

const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }

const imageVariants = {
    hidden: { height: '100px', width: '550px' },
    visible: { height: '750px' }
}

const buttonVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
}

const descVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
}

const circleVariants = {
    hidden: { right: '-5%', bottom: '60%', opacity: 0 },
    visible: { right: '-5%', bottom: '-5%', opacity: 1 }
}

export default function Projects({ visible }) {
    return (
        <div id="projects">
            <Row className="d-flex align-items-center">
                <Col xs={12} md={6} className="d-flex position-relative justify-content-end">
                    <p className='fs-4 rotate'>事業</p>
                    <motion.div 
                        variants={circleVariants}
                        initial='hidden'
                        animate={visible ? 'visible' : 'hidden'}
                        transition={{ ...transition, delay: 0.3 }}
                        className='bg-primary rounded-circle circle-container position-absolute'
                    ></motion.div>
                    <motion.img
                        variants={imageVariants}
                        initial='hidden'
                        animate={visible ? 'visible' : 'hidden'}
                        transition={{ ...transition, delay: 0.2 }}
                        src="/images/projects.webp"
                        className="image-height"
                        alt=""
                    >
                    </motion.img>
                </Col>
                <Col xs={12} md={6}>
                    <div className="text-outline">
                        <div className="bigger-text">
                            <TextReveal text="Projects" visible={visible} delay={1} />
                        </div>

                        <motion.p
                            variants={descVariants}
                            initial='hidden'
                            animate={visible ? 'visible' : 'hidden'}
                            transition={{ ...transition, delay: 0.3 }}
                            className="fs-2"
                        >
                            view my top websites
                        </motion.p>

                        <Link to='/projects'>
                            <motion.div
                                variants={buttonVariants}
                                initial='hidden'
                                animate={visible ? 'visible' : 'hidden'}
                                transition={{ ...transition, delay: 0.5 }}
                            >
                                <Button variant="outline-secondary" size="lg" className='mt-4'>catalogue</Button>
                            </motion.div>
                        </Link>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
