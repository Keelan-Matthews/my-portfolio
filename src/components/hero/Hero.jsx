import React, { useRef, useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import Navigation from '../Navigation'
import WaveImage from './WaveImage'
import { MouseParallax } from 'react-just-parallax'
import TextTransition, { presets } from "react-text-transition";

export default function Hero() {
    const parRef = useRef()
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            3000 // every 2 seconds
        )
        return () => clearTimeout(intervalId)
    }, [])

    const TEXTS = [
        "web developer",
        "ui/ux designer",
        "graphic designer"
    ];

    return (
        <div className="vh-100 pt-5">
            <Row className='pt-5 h-100'>
                <Col xs={12} md={1} className='d-flex flex-column justify-content-between align-items-center'>
                    <FontAwesomeIcon icon={faEnvelope} className='fs-1' />
                    <Navigation />
                    <div></div>
                </Col>
                <Col xs={11} md={10}>
                    <Row ref={parRef}>
                        <Col xs={12} md={6} className='p-5'>
                            <p className='m-0 japanese'>デザイン</p>
                            <div className="text-outline">
                                <h1 className='display-1 m-0'>Keelan</h1>
                                <h1 className='display-1'>Matthews</h1>
                            </div>
                            <p className='fs-2'>
                                <TextTransition springConfig={presets.wobbly} inline>
                                    {TEXTS[index % TEXTS.length]}
                                </TextTransition>
                                .
                            </p>
                            <Button variant="outline-secondary" size="lg" className='mt-5'>download cv</Button>
                        </Col>
                        <Col xs={12} md={6}>
                            <div className="position-relative">
                                <div className="position-absolute painting">
                                    <MouseParallax isAbsolutelyPositioned shouldResetPosition strength={0.01} parallaxContainerRef={parRef}>
                                        <div style={{ width: '700px', height: '800px' }}>
                                            <WaveImage />
                                        </div>
                                    </MouseParallax>
                                </div>
                                <div className="position-absolute circle">
                                    <MouseParallax isAbsolutelyPositioned shouldResetPosition strength={0.03} parallaxContainerRef={parRef}>
                                        <div className='bg-primary rounded-circle' style={{ width: '150px', height: '150px' }}></div>
                                    </MouseParallax>
                                </div>
                                <div className="position-absolute statue">
                                    <MouseParallax isAbsolutelyPositioned shouldResetPosition strength={0.05} parallaxContainerRef={parRef}>
                                        <div>
                                            <img src="/images/statue.png" alt="statue" width={400} />
                                        </div>
                                    </MouseParallax>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col xs={1} className="d-flex flex-column justify-content-between align-items-center">
                    <div className="page-number">
                        <p className='fs-1'>00</p>
                    </div>
                    <div className='scroll-down d-flex flex-column justify-content-center align-items-center'>
                        <p className='fs-5'>scroll down</p>
                        <div className="mt-5 scroll-line"></div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
