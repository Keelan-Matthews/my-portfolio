import React, { useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { motion, useAnimation } from 'framer-motion/dist/framer-motion'
import TextReveal from '../animations/TextReveal'
import { headingLineVariants, aboutTextVariants, paragraphLineVariants, portraitImageVariants, aboutTransition } from '../animations/customVariants'

export default function Introduction({ inView }) {
    const ctrls = useAnimation();

    useEffect(() => {
        ctrls.start(inView ? "visible" : "hidden")
    }, [inView])

    return (
        <div className="vh-100 d-flex flex-column justify-content-center">
            <div className="d-flex align-items-center mb-5">
                <motion.div
                    variants={headingLineVariants}
                    initial="hidden"
                    animate={ctrls}
                    transition={aboutTransition}
                    className="heading-line me-4 mb-3"
                ></motion.div>
                <div className="fw-bold">
                    <TextReveal text="Introduction" visible={inView} delay={0.6} />
                </div>
            </div>
            <Row className="d-flex align-items-center">
                <Col xs={12} md={6} className="d-flex justify-content-end">
                    <div className="w-75">
                        <motion.small 
                            variants={aboutTextVariants}
                            initial="hidden"
                            animate={ctrls}
                            transition={{...aboutTransition, delay: 0.8}}
                            className="m-0"
                        >
                            自分
                        </motion.small>
                        <motion.p 
                            variants={aboutTextVariants}
                            initial="hidden"
                            animate={ctrls}
                            transition={{...aboutTransition, delay: 0.6}}
                            className='fw-bold mb-4 fs-3'
                        >
                            Who I am
                        </motion.p>
                        <div className="d-flex">
                            <motion.div 
                                variants={paragraphLineVariants}
                                initial="hidden"
                                animate={ctrls}
                                transition={{...aboutTransition, delay: 0.2}}
                                className="border-start border-2 border-primary"
                            >   
                            </motion.div>
                            <motion.p 
                                variants={aboutTextVariants}
                                initial="hidden"
                                animate={ctrls}
                                transition={{...aboutTransition, delay: 1}}
                                className="fs-5 ps-3"
                            >
                                I am an aspiring Full Stack Developer from <span className="fw-bold">Johannesburg, South Africa</span>. Throughout my upbringing, I have harbored an insatiable thirst for creativity and a relentless pursuit of perfection. These qualities, coupled with my genuine passion for coding, have paved the way for my current path. <br /><br />
                                With a remarkable ability to rapidly acquire new skills, I consistently deliver projects well ahead of schedule, <span className="fw-bold">thriving</span> under pressure. By seamlessly blending creative prowess with technical expertise, I am eager to contribute as a Full Stack Developer, leaving a lasting impact in the industry.
                            </motion.p>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={6} className="text-center">
                    <motion.img 
                        variants={portraitImageVariants}
                        initial="hidden"
                        animate={ctrls}
                        transition={{...aboutTransition, delay: 1.3}}
                        src="images/home/portrait.webp" alt="" 
                    />
                </Col>
            </Row>
        </div >
    )
}
