import React, { useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { motion, useAnimation } from 'framer-motion/dist/framer-motion'
import TextReveal from '../animations/TextReveal'

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }

const headingLineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { width: 140, opacity: 1 }
}

const textVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
}

const imageVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
}

const paragraphLineVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: 330, opacity: 1 }
}

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
                    transition={transition}
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
                            variants={textVariants}
                            initial="hidden"
                            animate={ctrls}
                            transition={{...transition, delay: 0.8}}
                            className="m-0"
                        >
                            自分
                        </motion.small>
                        <motion.p 
                            variants={textVariants}
                            initial="hidden"
                            animate={ctrls}
                            transition={{...transition, delay: 0.6}}
                            className='fw-bold mb-4 fs-3'
                        >
                            Who I am
                        </motion.p>
                        <div className="d-flex">
                            <motion.div 
                                variants={paragraphLineVariants}
                                initial="hidden"
                                animate={ctrls}
                                transition={{...transition, delay: 0.2}}
                                className="border-start border-2 border-primary"
                            >   
                            </motion.div>
                            <motion.p 
                                variants={textVariants}
                                initial="hidden"
                                animate={ctrls}
                                transition={{...transition, delay: 1}}
                                className="fs-5 ps-3"
                            >
                                I am an aspiring Full Stack Developer from <span className="fw-bold">Johannesburg, South Africa</span>. Growing up, I have always had an insatiable desire for creativity and perfection. This, coupled up with my thorough enjoyment in coding, lead me down my current path.
                                The idea of being able to produce anything from scratch intrigues me. This also includes designing vector graphics, 3D renders, animations and even music.<br /><br />
                                I am able to pick up new skills very quickly, and always complete my deadlines early. In the event of time constraints, I <span className="fw-bold">thrive</span> under pressure.
                            </motion.p>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={6} className="text-center">
                    <motion.img 
                        variants={imageVariants}
                        initial="hidden"
                        animate={ctrls}
                        transition={{...transition, delay: 1.3}}
                        src="images/home/portrait.webp" alt="" 
                    />
                </Col>
            </Row>
        </div >
    )
}
