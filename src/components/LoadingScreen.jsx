import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion/dist/framer-motion'

import Image1 from '../images/about-me.webp'
import Image2 from '../images/interactive-trailer.webp'
import Image3 from '../images/motion-vio-comic.webp'
import Image4 from '../images/painting.webp'
import Image5 from '../images/portrait.webp'
import Image6 from '../images/projects.webp'
import Image7 from '../images/rudasa.webp'
import Image8 from '../images/yacht-portfolio.webp'

const preloadSrcList = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8]

export default function LoadingScreen({ loading, setLoading, modelLoading }) {
    const [percentage, setPercentage] = useState(0)

    useEffect(() => {
        cacheImages(preloadSrcList, setPercentage, setLoading)
      }, [])

    return (
        <motion.div 
            variants={variants}
            initial="visible"
            animate={loading || modelLoading ? "visible" : "hidden"}
            transition={transition}
            className="position-fixed vh-100 vw-100 d-flex justify-content-center align-items-center" 
            style={{ zIndex: 99999, backgroundColor: "white" }}
        >
            <div>
                <p className="display-2">{`${percentage/16*100}%`}</p>
            </div>
        </motion.div>
    )
}

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96], delay: 0.3 }

const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
}

const cacheImages = async (srcList, setPercentage, setLoading) => {
    const promises = await srcList.map(src => {
        return new Promise((resolve, reject) => {
            const img = new Image()
            img.src = src
            img.onload = resolve(
                setPercentage(percentage => percentage + 1)
            )
            img.onerror = reject()
        })
    })
    await Promise.all(promises)
    setLoading(false)
}