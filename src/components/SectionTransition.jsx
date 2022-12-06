import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { motion } from 'framer-motion/dist/framer-motion'

export default function SectionTransition({ japanese, circleVar, title, cta, desc }) {

    const toImage = (title) => title.toLowerCase().replace(/ /g, '-') + '.webp';

    return (
        <Row className="d-flex align-items-center">
            <Col xs={12} md={6} className="d-flex position-relative justify-content-end">
                <p className='fs-4 rotate'>{japanese}</p>
                <motion.div
                    variants={circleVar === 1 ? circle1Variants : circle2Variants}
                    initial='hidden'
                    animate='visible'
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
                        {cta}
                    </motion.span>
                </motion.div>
                <div className='scroll-down d-flex flex-column align-items-center w-25'>
                    <motion.p 
                        variants={scrollTextVariants}
                        initial='hidden'
                        animate='visible'
                        transition={{ ...transition, delay: 1 }}
                        className="fs-5"
                    >
                        scroll down
                    </motion.p>
                    <motion.div 
                        variants={scrollLineVariants}
                        initial='hidden'
                        animate='visible'
                        transition={{ ...transition, delay: 1.5 }}
                        className="mt-5 border-start border-2 border-dark"
                    >
                    </motion.div>
                </div>
            </Col>
        </Row>
    )
}

const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }

const circle1Variants = {
    hidden: { left: '3%', bottom: '5%' },   
    visible: { left: '-5%', bottom: '5%' }
}

const circle2Variants = {
    hidden: { right: '-5%', bottom: '-5%' },
    visible: { right: '-5%', bottom: '-1%' }
}

const scrollTextVariants = {
    hidden: { opacity: 0, y: -30, width: 130, rotate: 90 },
    visible: { opacity: 1, y: 0, rotate: 90 }
}

const scrollLineVariants = {
    hidden: { height: 0 },
    visible: { height: 300 }
}

const buttonVariants = {
    hidden: { scaleY: 1 },
    visible: { scaleY: 0 }
}

const buttonTextVariants = {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 0, y: -10 }
}