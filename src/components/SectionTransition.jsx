import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { motion } from 'framer-motion/dist/framer-motion'
import TextReveal from './animations/TextReveal'
import { Button } from 'react-bootstrap'

export default function SectionTransition({ japanese, circleVar = false, title, cta = "case study", desc = '' }) {

    const slug = title.toLowerCase().replace(/ /g, '-') + '.webp';

    const titleArray = title.split(' ');
    const titleArrayLength = titleArray.length;

    return (
        <Row className="d-flex align-items-center">
            <Col xs={12} md={6} className="d-flex position-relative justify-content-end">
                <p className='fs-4 rotate'>{japanese}</p>
                {
                    circleVar && <motion.div
                        variants={circleVar === 1 ? circle1Variants : circle2Variants}
                        initial='hidden'
                        animate='visible'
                        transition={transition}
                        style={{ zIndex: 5 }}
                        className='bg-primary rounded-circle circle-container position-absolute'
                    ></motion.div>
                }

                <motion.img
                    initial={{ height: '750px', width: '550px' }}
                    animate={{ width: '730px' }}
                    transition={transition}
                    src={`/images/${slug}`}
                    className="image-crop"
                    alt=""
                >
                </motion.img>
            </Col>
            <Col xs={12} md={6}>
                <div>
                    <div className='p-4'></div>
                    {
                        titleArrayLength > 2 ?
                            <div>
                                <div className="smaller-text">
                                    <TextReveal
                                        text={titleArray.slice(0, titleArrayLength - 2).join(' ')}
                                        visible={true}
                                        showInit={true}
                                    />
                                </div>

                                <div className="bigger-text">
                                    <TextReveal
                                        text={titleArray.slice(titleArrayLength - 2).join(' ')}
                                        visible={true}
                                        className="transform-left m-0"
                                        showInit={true}
                                    />
                                </div>
                            </div>
                            :
                            <div className="bigger-text">
                                <TextReveal
                                    text={title}
                                    visible={true}
                                    className="transform-left m-0"
                                    showInit={true}
                                />
                            </div>
                    }
                    <motion.p
                        initial={{ opacity: 1, y: 0 }}
                        animate={{ opacity: 0, y: -10 }}
                        transition={{ ...transition, delay: 0.3 }}
                        className="fs-2"
                    >
                        {desc}
                    </motion.p>
                </div>

                <div className={!circleVar ? 'mt-5 d-flex' : ''}>
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

                    {!circleVar && <div className="overflow-hidden view-site">
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
                    </div>}
                </div>

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