import React, { useRef, useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import WaveImage from './WaveImage'
import { MouseParallax } from 'react-just-parallax'
import TextTransition, { presets } from "react-text-transition"
import TextReveal from '../animations/TextReveal'
import { motion } from 'framer-motion/dist/framer-motion'

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
    hidden: { left: '2000px', top: '-17%', opacity: 0 },
    visible: { left: '30%', opacity: 0.4 }
}

const statueVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
}

export default function Hero({ setScrollY }) {

    const parRef = useRef()
    const [index, setIndex] = useState(0)
    const [showHero, setShowHero] = useState(true)

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
        <div id="hero" className="pb-5 mb-5">
            <Row ref={parRef} className='position-relative pb-5 mb-5'>
                <Col xs={12} md={6} className='p-5'>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 100 }}
                        transition={{ ...transition, delay: 0.2 }}
                        className="m-0"
                    >
                        <p>デザイン</p>
                    </motion.div>
                    <a href="#about-section" className="text-decoration-none">
                        <div className="text-outline">
                            <div className="keelan-text">
                                <TextReveal text="Keelan" visible={true} className="mb-0" />
                            </div>
                            <TextReveal text="Matthews" visible={true} />
                        </div>
                    </a>

                    <motion.p
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...transition, delay: 0.4 }}
                        className="fs-2"
                    >
                        <TextTransition springConfig={presets.gentle} inline>
                            {TEXTS[index % TEXTS.length]}
                        </TextTransition>
                        &nbsp;de
                        <TextTransition springConfig={presets.gentle} inline>
                            {TEXTS2[index % TEXTS2.length]}
                        </TextTransition>
                        er.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...transition, delay: 1 }}
                    >
                        <Button variant="outline-secondary" size="lg" className='mt-5'>download cv</Button>
                    </motion.div>
                </Col>
                <Col xs={12} md={6}>
                    <div className="position-relative h-100 w-100">
                        <motion.div
                            initial={{ left: '2000px', top: '-17%', opacity: 0 }}
                            animate={{ left: '30%', opacity: 0.4 }}
                            transition={{ ...transition, delay: 1.2 }}
                            className="position-absolute painting"
                        >
                            <MouseParallax isAbsolutelyPositioned shouldResetPosition strength={0.01} parallaxContainerRef={parRef}>
                                <div className="painting-container">
                                    <WaveImage type="hero" />
                                </div>
                            </MouseParallax>
                        </motion.div>

                        <div className={`position-absolute circle ${showHero ? 'visible' : ''}`}>
                            <MouseParallax isAbsolutelyPositioned shouldResetPosition strength={0.03} parallaxContainerRef={parRef}>
                                <div className='bg-primary rounded-circle circle-container'></div>
                            </MouseParallax>
                        </div>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ ...transition, delay: 1.4 }}
                            className="position-absolute statue"
                        >
                            <MouseParallax isAbsolutelyPositioned shouldResetPosition strength={0.05} parallaxContainerRef={parRef}>
                                <div>
                                    <img src="/images/statue1.png" alt="statue" width={400} />
                                </div>
                            </MouseParallax>
                        </motion.div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
