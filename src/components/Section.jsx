import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion/dist/framer-motion'
import TextReveal from './animations/TextReveal'

const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }

const imageVariants = {
    hidden: { height: '10%' },
    visible: { height: '100%' }
}

const buttonVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
}

const descVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
}

const japaneseVariants = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0 }
}

const circleVariants = {
    hidden: { left: '22%', bottom: '60%', opacity: 0 },
    visible: { left: '22%', bottom: '5%', opacity: 1 }
}

const circleVariants2 = {
    hidden: { right: '-5%', bottom: '60%', opacity: 0 },
    visible: { right: '-5%', bottom: '-5%', opacity: 1 }
}

export default function Section({ visible, japanese, circleVar = false, title, cta, desc, site = false }) {

    const image = title.toLowerCase().replace(/ /g, '-') + '.webp';
    const slug = "/" + title.toLowerCase().split(' ')[0];

    const titleArray = title.split(' ');
    const titleArrayLength = titleArray.length;

    return (
        <div>
            <Row className="d-flex align-items-center">
                <Col xs={12} md={6} className="d-flex position-relative justify-content-end">
                    <motion.p
                        variants={japaneseVariants}
                        initial="hidden"
                        animate={visible ? "visible" : "hidden"}
                        transition={{ ...transition, delay: 0.9 }}
                        className='fs-4 rotate'
                    >
                        {japanese}
                    </motion.p>

                    <motion.div
                        variants={circleVar === 1 ? circleVariants : circleVariants2}
                        initial='hidden'
                        animate={visible && circleVar ? 'visible' : 'hidden'}
                        transition={{ ...transition, delay: 0.3 }}
                        className='bg-primary rounded-circle circle-container position-absolute'
                    ></motion.div>

                    <div className="image-height d-flex align-items-center">
                        <motion.img
                            variants={imageVariants}
                            initial='hidden'
                            animate={visible ? 'visible' : 'hidden'}
                            transition={{ ...transition, delay: 0.5 }}
                            src={`/images/${image}`}
                            className={`image-crop ${site ? 'lower-opacity' : ''}`}
                            width={'100%'}
                            alt=""
                        >
                        </motion.img>
                    </div>

                </Col>
                <Col xs={12} md={6}>
                    <div className={site ? 'project-title' : ''}>
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

                        <motion.p
                            variants={descVariants}
                            initial='hidden'
                            animate={visible ? 'visible' : 'hidden'}
                            transition={{ ...transition, delay: 0.3 }}
                            className={site ? 'fs-5 mt-5' : 'fs-2'}
                            style={site ? { maxWidth: '600px' } : ''}
                        >
                            {desc}
                        </motion.p>

                        {
                            site ?
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
                                :
                                <Link to={slug}>
                                    <motion.div
                                        variants={buttonVariants}
                                        initial='hidden'
                                        animate={visible ? 'visible' : 'hidden'}
                                        transition={{ ...transition, delay: 0.5 }}
                                    >
                                        <Button variant="outline-secondary" size="lg" className='mt-4'>{cta}</Button>
                                    </motion.div>
                                </Link>
                        }

                    </div>
                </Col>
            </Row>
        </div>
    )
}
