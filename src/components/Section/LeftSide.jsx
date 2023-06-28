import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'
import { sectionTransition, sectionJapaneseVariants, imageVariants, circleArray1, circleArray2 } from '../animations/customVariants'
import { MouseParallax } from 'react-just-parallax'

export default function LeftSide({ visible, japanese, circleVar, switchVar, imgDelay, isMobile, slug, initial, ctrls, imageCropClass }) {
    
    const source = `/images/${circleVar ? "home/" : "projects/"}${slug}.webp`;
    
    return (
        <>
            {/* Japanese Accent */}
            <motion.p
                variants={sectionJapaneseVariants}
                initial={initial}
                animate={ctrls}
                transition={{ ...sectionTransition, delay: 0.9 }}
                className='fs-4 rotate'
            >
                {japanese}
            </motion.p>

            {/* Circle */}
            <motion.div
                variants={circleVar === 1 ? circleArray2[isMobile] : circleArray1[isMobile]}
                initial={circleVar ? initial : 'hidden'}
                animate={
                    visible && circleVar ? (switchVar ? 'switch' : 'visible') : 'hidden'
                }
                transition={{ ...sectionTransition, delay: 0.3 }}
                className='bg-primary rounded-circle circle-container smaller position-absolute'
                style={{ zIndex: 5 }}
            ></motion.div>

            {/* Image */}
            <div className={`d-flex align-items-center ${switchVar && imgDelay ? 'image-height-extended' : 'image-height'}`} style={{ overflow: "hidden" }}>
                <motion.div
                    variants={imageVariants}
                    initial={initial}
                    animate={ctrls}
                    transition={{ ...sectionTransition, delay: 0.5 }}
                >
                    <MouseParallax shouldResetPosition strength={0.01} height>
                        <img

                            src={source}
                            className={`image-crop ${imageCropClass}`}
                            width={'100%'}
                            height={'100%'}
                            alt=""
                        >
                        </img>
                    </MouseParallax>
                </motion.div>
            </div>
        </>
    )
}
