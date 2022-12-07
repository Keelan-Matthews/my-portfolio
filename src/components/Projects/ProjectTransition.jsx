import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { motion } from 'framer-motion/dist/framer-motion'
import TextReveal from '../animations/TextReveal'

const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }

const imageVariants = {
    hidden: { height: '750px', width: '550px' },
    visible: { height: 0 }
}

const buttonVariants = {
    hidden: { scaleY: 1 },
    visible: { scaleY: 0 }
}

const buttonTextVariants = {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 0, y: -10 }
}

const japaneseVariants = {
    hidden: { opacity: 1, x: 0 },
    visible: { opacity: 0, x: -20 }
}

export default function ProjectTransition({ japanese, title }) {
    const slug = title.toLowerCase().replace(/ /g, '-');

    const titleArray = title.split(' ');
    const titleArrayLength = titleArray.length;

    const [titleDelay, setTitleDelay] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setTitleDelay(false);
        }, 600);
    }, [])

    return (
        <div className='vh-100 d-flex align-items-center justify-content-center'>
            <Row className="d-flex align-items-center">
                {/* Left Side */}
                <Col xs={12} md={6} className="d-flex position-relative justify-content-end">
                    {/* Japanese Accent */}
                    <motion.p
                        variants={japaneseVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ ...transition, delay: 0.9 }}
                        className='fs-4 rotate'
                    >
                        {japanese}
                    </motion.p>

                    {/* Image */}
                    <div className="image-height d-flex align-items-center" style={{ overflow: "hidden" }}>
                        <motion.div
                            variants={imageVariants}
                            initial='hidden'
                            animate='visible'
                            transition={{ ...transition, delay: 0.5 }}
                        >
                            <img

                                src={`/images/${slug}.webp`}
                                className="image-crop lower-opacity"
                                width={'100%'}
                                height={'100%'}
                                alt=""
                            >
                            </img>
                        </motion.div>
                    </div>
                </Col>

                {/* Right Side */}
                <Col xs={12} md={6}>
                    {/* Section Title */}
                    <div className='project-title'>
                        {
                            titleArrayLength > 2 ?
                                <div>
                                    <div className="smaller-text">
                                        <TextReveal
                                            text={titleArray.slice(0, titleArrayLength - 2).join(' ')}
                                            visible={titleDelay}
                                            delay={1}
                                            showInit={true}
                                        />
                                    </div>

                                    <div className="bigger-text">
                                        <TextReveal
                                            text={titleArray.slice(titleArrayLength - 2).join(' ')}
                                            visible={titleDelay}
                                            className="transform-left m-0"
                                            delay={1}
                                            showInit={true}
                                        />
                                    </div>
                                </div>
                                :
                                <div className="bigger-text">
                                    <TextReveal
                                        text={title}
                                        visible={titleDelay}
                                        className="transform-left m-0"
                                        delay={1}
                                        showInit={true}
                                    />
                                </div>
                        }
                        <div className="mt-5 d-flex">
                            <motion.div
                                variants={buttonVariants}
                                initial='hidden'
                                animate='visible'
                                transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
                                className="border-black-1 fs-5 mt-4 d-inline-block p-2 px-3"
                            >
                                <motion.span
                                    variants={buttonTextVariants}
                                    initial='hidden'
                                    animate='visible'
                                    transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
                                >
                                    case study
                                </motion.span>
                            </motion.div>
                            <div className="overflow-hidden view-site">
                                <motion.div
                                    variants={buttonTextVariants}
                                    initial='hidden'
                                    animate='visible'
                                    transition={{ ...transition, delay: 1 }}
                                >
                                    <Button size="lg" variant="outline-light text-dark" className='mt-4 site-button'>
                                        <p>view site</p>
                                    </Button>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
