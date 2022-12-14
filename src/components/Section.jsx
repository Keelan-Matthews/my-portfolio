import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { motion, useAnimation } from 'framer-motion/dist/framer-motion'
import TextReveal from './animations/TextReveal'
import { MouseParallax } from 'react-just-parallax'
import { BsArrowRight } from 'react-icons/bs'

const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }

const imageVariants = {
    hidden: { height: '10%', width: '100%', scale: 1 },
    visible: { height: '100%', width: '100%', scale: 1.08 },
    switch: { width: '100%', height: '100%', scale: 1.08 }
}

const buttonVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
    switch: { scaleY: 0 }
}

const button2Variants = {
    hidden: { x: -200, opacity: 1 },
    visible: { x: 0, opacity: 1 },
    switch: { y: -20, opacity: 0 }
}

const buttonTextVariants = {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 0, y: -10 }
}

const descVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
    switch: { opacity: 0, y: -10 }
}

const japaneseVariants = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0 },
    switch: { opacity: 1, y: 0 }
}

const circleVariants = {
    hidden: { left: '22%', bottom: '60%', opacity: 0 },
    visible: { left: '22%', bottom: '5%', opacity: 1 },
    switch: { left: '5%', bottom: '5%' }
}

const circleVariants2 = {
    hidden: { right: '-5%', bottom: '60%', opacity: 0 },
    visible: { right: '-5%', bottom: '-5%', opacity: 1 },
    switch: { right: '-5%', bottom: '-1%' }
}

const scrollTextVariants = {
    visible: { opacity: 0, y: -30, width: 130, rotate: 90 },
    switch: { opacity: 1, y: 0, rotate: 90 }
}

const scrollLineVariants = {
    visible: { height: 0 },
    switch: { height: 300 }
}

export default function Section({ visible, japanese, circleVar = false, title, cta, desc, site = false, switchVar = false }) {
    const ctrls = useAnimation();
    const initial = switchVar ? "visible" : "hidden";
    const [imgDelay, setImgDelay] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setImgDelay(true);
        }, 300)
    }, [])

    useEffect(() => {
        ctrls.start(
            visible ?
                switchVar ? "switch" : "visible"
                : "hidden"
        )

    }, [visible])

    const slug = title.toLowerCase().replace(/ /g, '-');

    const titleArray = title.split(' ');
    const titleArrayLength = titleArray.length;

    return (
        <div>
            <Row className="d-flex align-items-center">
                {/* Left Side */}
                <Col xs={12} md={6} className="d-flex position-relative justify-content-end">
                    {/* Japanese Accent */}
                    <motion.p
                        variants={japaneseVariants}
                        initial={initial}
                        animate={ctrls}
                        transition={{ ...transition, delay: 0.9 }}
                        className='fs-4 rotate'
                    >
                        {japanese}
                    </motion.p>

                    {/* Circle */}
                    <motion.div
                        variants={circleVar === 1 ? circleVariants2 : circleVariants}
                        initial={circleVar ? initial : 'hidden'}
                        animate={
                            visible && circleVar ?
                                switchVar ? 'switch' : 'visible'
                                : 'hidden'
                        }
                        transition={{ ...transition, delay: 0.3 }}
                        className='bg-primary rounded-circle circle-container position-absolute'
                        style={{ zIndex: 5 }}
                    ></motion.div>

                    {/* Image */}
                    <div className={`d-flex align-items-center ${switchVar && imgDelay ? 'image-height-extended' : 'image-height'}`} style={{ overflow: "hidden" }}>
                        <motion.div
                            variants={imageVariants}
                            initial={initial}
                            animate={ctrls}
                            transition={{ ...transition, delay: 0.5 }}
                        >
                            <MouseParallax shouldResetPosition strength={0.01} height>
                                <img

                                    src={`/images/${circleVar ? "home/" : "projects/"}${slug}.webp`}
                                    className={`image-crop ${site ? 'lower-opacity' : ''}`}
                                    width={'100%'}
                                    height={'100%'}
                                    alt=""
                                >
                                </img>
                            </MouseParallax>
                        </motion.div>
                    </div>
                </Col>

                {/* Right Side */}
                <Col xs={12} md={6}>
                    {/* Section Title */}
                    <div className={site ? 'project-title' : ''}>
                        {
                            titleArrayLength > 2 ?
                                <div>
                                    <div className="smaller-text">
                                        <TextReveal
                                            text={titleArray.slice(0, titleArrayLength - 2).join(' ')}
                                            visible={visible}
                                            delay={1}
                                            showInit={switchVar}
                                        />
                                    </div>

                                    <div className="bigger-text">
                                        <TextReveal
                                            text={titleArray.slice(titleArrayLength - 2).join(' ')}
                                            visible={visible}
                                            className="transform-left m-0"
                                            delay={1}
                                            showInit={switchVar}
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
                                        showInit={switchVar}
                                    />
                                </div>
                        }

                        <motion.p
                            variants={descVariants}
                            initial={initial}
                            animate={ctrls}
                            transition={{ ...transition, delay: 0.3 }}
                            className={site ? '' : 'description'}
                            style={site ? { maxWidth: '600px' } : ''}
                        >
                            {desc}
                        </motion.p>

                        {
                            site ?
                                <div className="mt-5 d-flex">
                                    <motion.div
                                        variants={buttonVariants}
                                        initial={initial}
                                        animate={ctrls}
                                        transition={{ ...transition, delay: 0.5 }}
                                    >
                                        <Link to={`/projects/${slug}`}>
                                            <Button variant="outline-secondary" size="lg" className='mt-4'>case study</Button>
                                        </Link>
                                    </motion.div>
                                    <div className="overflow-hidden view-site">
                                        <motion.div
                                            variants={button2Variants}
                                            initial={initial}
                                            animate={ctrls}
                                            transition={{ ...transition, delay: 1 }}
                                        >
                                            <Button href={site} target="_blank" size="lg" variant="outline-light text-dark" className='mt-4 site-button'>
                                                <p>
                                                    view site <span className='show-arrow'><BsArrowRight size={20} /></span>
                                                </p>
                                            </Button>
                                        </motion.div>
                                    </div>
                                </div>
                                :
                                <Link to={slug}>
                                    <motion.div
                                        variants={buttonVariants}
                                        initial={initial}
                                        animate={ctrls}
                                        transition={{ ...transition, delay: 0.5 }}
                                    >
                                        <Button variant="outline-secondary" size="lg" className='mt-4'>{cta}</Button>
                                    </motion.div>
                                </Link>
                        }

                        <div className={`scroll-down d-flex flex-column align-items-center w-25 ${switchVar ? '' : 'invisible'}`}>
                            <motion.p
                                variants={scrollTextVariants}
                                initial={initial}
                                animate={ctrls}
                                transition={{ ...transition, delay: 1 }}
                                className="fs-5"
                            >
                                scroll down
                            </motion.p>
                            <motion.div
                                variants={scrollLineVariants}
                                initial={initial}
                                animate={ctrls}
                                transition={{ ...transition, delay: 1.5 }}
                                className="mt-5 border-start border-2 border-dark"
                            >
                            </motion.div>
                        </div>

                    </div>
                </Col>
            </Row>
        </div>
    )
}
