import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { motion } from 'framer-motion/dist/framer-motion'
import TextReveal from '../animations/TextReveal'
import { BsArrowRight } from 'react-icons/bs'

const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }

const imageVariants = {
    hidden: { height: '100px', width: '550px' },
    visible: { height: '750px' }
}

const buttonVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
}

const button2Variants = {
    hidden: { x: -200 },
    visible: { x: 0 }
}

export default function Project({ japanese, title, site, visible }) {

    const slug = title.replace(/\s+/g, '-').toLowerCase();
    const titleArray = title.split(' ');
    const titleArrayLength = titleArray.length;

    return (
        <div className="section">
            <Row className="d-flex align-items-center">
                <Col xs={12} md={6} className="d-flex justify-content-end">
                    <p className='fs-4 rotate'>{japanese}</p>
                    <motion.img
                        variants={imageVariants}
                        initial='hidden'
                        animate={visible ? 'visible' : 'hidden'}
                        transition={transition}
                        src={`/images/${slug}.webp`}
                        className='image-height lower-opacity'
                        alt=""
                    >
                    </motion.img>
                </Col>
                <Col xs={12} md={6}>
                    <div className='project-title'>
                        {
                            titleArrayLength > 2 ?
                                <div>
                                    <div className="smaller-text">
                                        <TextReveal
                                            text={titleArray.slice(0, titleArrayLength - 2).join(' ')}
                                            visible={visible}
                                            delay={1}
                                        />
                                    </div>

                                    <div className="bigger-text">
                                        <TextReveal
                                            text={titleArray.slice(titleArrayLength - 2).join(' ')}
                                            visible={visible}
                                            className="transform-left m-0"
                                            delay={1}
                                        />
                                    </div>
                                </div>
                                :
                                <div className="bigger-text">
                                    <TextReveal
                                        text={title}
                                        visible={visible}
                                        className="transform-left m-0"
                                        delay={1}
                                    />
                                </div>
                        }

                        <div className="mt-5 d-flex">
                            <motion.div
                                variants={buttonVariants}
                                initial='hidden'
                                animate={visible ? 'visible' : 'hidden'}
                                transition={{ ...transition, delay: 0.5 }}
                            >
                                {/* <Button href={`/projects/${slug}`} variant="outline-secondary" size="lg" className='mt-4'>case study</Button> */}
                                <Button href={site} variant="outline-secondary" size="lg" className='mt-4'>view site</Button>
                            </motion.div>
                            {/* <div className="overflow-hidden view-site">
                                <motion.div
                                    variants={button2Variants}
                                    initial='hidden'
                                    animate={visible ? 'visible' : 'hidden'}
                                    transition={{ ...transition, delay: 1 }}
                                >
                                    <Button href={site} size="lg" variant="outline-light text-dark" className='mt-4 site-button'>
                                        <p>
                                            view site <span className='show-arrow'><BsArrowRight size={20} /></span>
                                        </p>
                                    </Button>
                                </motion.div>
                            </div> */}
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
