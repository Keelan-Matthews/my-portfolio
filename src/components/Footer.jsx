import React from 'react'
import { BsArrowUpCircleFill } from 'react-icons/bs'
import { motion } from 'framer-motion/dist/framer-motion'

export default function Footer({ scrollToTop }) {
    return (
        <div className='my-5 text-dark text-center'>
            <div onClick={() => scrollToTop()}>
                <motion.div
                    whileHover={{
                        y: -7,
                        transition: { duration: 0.7, ease: 'easeInOut' },
                      }}
                >
                    <BsArrowUpCircleFill size={37} />
                </motion.div>
                
                <p className="mt-3">back to top</p>
            </div>
        </div>
    )
}
