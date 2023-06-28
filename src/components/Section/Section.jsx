import React, { useEffect, useState } from 'react'
import { useAnimation } from 'framer-motion/dist/framer-motion'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import LeftSide from './LeftSide'
import RightSide from './RightSide'

export default function Section({ visible, japanese, circleVar = false, title, cta, desc, site = false, switchVar = false }) {
    const ctrls = useAnimation();
    const initial = switchVar ? "visible" : "hidden";
    const [imgDelay, setImgDelay] = useState(false);
    const [isMobile, setIsMobile] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setImgDelay(true);
        }, 300)
    }, [])

    useEffect(() => {
        ctrls.start(
            visible ? (switchVar ? "switch" : "visible") : "hidden"
        )

        setIsMobile(window.innerWidth < 1400 ? 1 : 0);
    }, [visible])

    const slug = title.toLowerCase().replace(/ /g, '-');
    const imageCropClass = site ? 'lower-opacity' : '';

    return (
        <div>
            <Row className="d-flex align-items-center">
                {/* Left Side */}
                <Col xs={12} md={6} className="d-flex  position-relative justify-content-center justify-content-md-end">
                    <LeftSide
                        visible={visible}
                        japanese={japanese}
                        circleVar={circleVar}
                        switchVar={switchVar}
                        imgDelay={imgDelay}
                        isMobile={isMobile}
                        slug={slug}
                        initial={initial}
                        ctrls={ctrls}
                        imageCropClass={imageCropClass}
                    />
                </Col>

                {/* Right Side */}
                <Col xs={12} md={6}>
                    <RightSide
                        visible={visible}
                        title={title}
                        desc={desc}
                        switchVar={switchVar}
                        site={site}
                        slug={slug}
                        initial={initial}
                        ctrls={ctrls}
                        cta={cta}
                    />
                </Col>
            </Row>
        </div>
    )
}
