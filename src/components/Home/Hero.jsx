import React, { useRef, useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import WaveImage from './WaveImage'
import { MouseParallax } from 'react-just-parallax'
import TextTransition, { presets } from "react-text-transition"
import TextReveal from '../animations/TextReveal'
import { motion, useAnimation } from 'framer-motion/dist/framer-motion'

export default function Hero({ visible, setModelLoading }) {
    const ctrls = useAnimation()
    const parRef = useRef()

    useEffect(() => {
        ctrls.start(visible ? "visible" : "hidden")
    }, [visible])

    return (
        <div className="pb-5">
            <Row ref={parRef} className='position-relative pb-5 mb-5'>
                <Col xs={12} md={6} className='p-5'>
                    {/* Japanese Accent */}
                    <motion.div
                        variants={japaneseVariants}
                        initial="hidden"
                        animate={ctrls}
                        transition={{ ...transition, delay: 0.8 }}
                        className="m-0"
                    >
                        <p>デザイン</p>
                    </motion.div>

                    {/* Main Heading */}
                    <a href="#about" className="text-decoration-none">
                        <div className="text-outline heading-text">
                            <div className="keelan-text">
                                <TextReveal text="Keelan" visible={visible} className="mb-0" delay={0.4} />
                            </div>
                            <TextReveal text="Matthews" visible={visible} delay={0.6} />
                        </div>
                    </a>

                    {/* Slogan */}
                    <motion.div
                        variants={sloganVariants}
                        initial="hidden"
                        animate={ctrls}
                        transition={{ ...transition, delay: 0.7 }}
                        className="fs-2"
                    >
                        <Slogan />
                    </motion.div>

                    {/* CV Button */}
                    <motion.div
                        variants={cvVariants}
                        initial="hidden"
                        animate={ctrls}
                        transition={{ ...transition, delay: 1.3 }}
                    >
                        <Button variant="outline-secondary" size="lg" className='mt-5' href="/keelan-matthews-cv.pdf" target="_blank">download cv</Button>
                    </motion.div>
                </Col>
                <Col xs={12} md={6}>
                    <div className="position-relative h-100 w-100">
                        {/* Wave Image */}
                        <motion.div
                            variants={paintingVariants}
                            initial="hidden"
                            animate={ctrls}
                            transition={{ ...transition }}
                            className="position-absolute painting"
                        >
                            <MouseParallax isAbsolutelyPositioned shouldResetPosition strength={0.01} parallaxContainerRef={parRef}>
                                <div className="painting-container">
                                    <WaveImage type="hero" setModelLoading={setModelLoading} />
                                </div>
                            </MouseParallax>
                        </motion.div>

                        {/* Circle */}
                        <motion.div 
                            variants={circleVariants}
                            initial="hidden"
                            animate={ctrls}
                            transition={{ ...transition, delay: 1.6 }}
                            className="position-absolute circle"
                        >
                            <MouseParallax isAbsolutelyPositioned shouldResetPosition strength={0.03} parallaxContainerRef={parRef}>
                                <div className='bg-primary rounded-circle circle-container'></div>
                            </MouseParallax>
                        </motion.div>

                        {/* Statue */}
                        <motion.div
                            variants={statueVariants}
                            initial="hidden"
                            animate={ctrls}
                            transition={{ ...transition, delay: 1.7 }}
                            className="position-absolute statue"
                        >
                            <MouseParallax isAbsolutelyPositioned shouldResetPosition strength={0.05} parallaxContainerRef={parRef}>
                                <div>
                                    <img src="/images/statue.webp" alt="statue" />
                                </div>
                            </MouseParallax>
                        </motion.div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

const Slogan = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            3000 // every 2 seconds
        )

        return () => clearTimeout(intervalId)
    }, [])

    const TEXTS = [
        "web ",
        "ui/ux ",
        "graphic "
    ];

    const TEXTS2 = [
        "velop",
        "sign",
        "sign"
    ];
    return (
        <>
            <TextTransition springConfig={presets.gentle} inline>
                {TEXTS[index % TEXTS.length]}
            </TextTransition>
            &nbsp;de
            <TextTransition springConfig={presets.gentle} inline>
                {TEXTS2[index % TEXTS2.length]}
            </TextTransition>
            er.
        </>
    )
}

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }

const japaneseVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 100 }
}

const sloganVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
}

const cvVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
}

const paintingVariants = {
    hidden: { left: '1000px', top: '-17%', opacity: 0.4 },
    visible: { left: '30%'}
}

const statueVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
}

const circleVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
}