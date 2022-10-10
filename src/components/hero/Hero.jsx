import React, { useRef, useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { AiOutlineMail } from 'react-icons/ai'
import Navigation from '../Navigation'
import WaveImage from './WaveImage'
import { MouseParallax } from 'react-just-parallax'
import TextTransition, { presets } from "react-text-transition"
import TextReveal from '../animations/TextReveal'

export default function Hero() {
    const parRef = useRef()
    const [index, setIndex] = useState(0)
    const [hideCircle, setHideCircle] = useState(false)
    const [showHero, setShowHero] = useState(false)

    useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            3000 // every 2 seconds
        )

        return () => clearTimeout(intervalId)
    }, [])

    const revealHero = () => {
        setHideCircle(true)
        setTimeout(() => {
            setShowHero(true)
        }, 1500)
    }

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
        <div className='vh-100 pt-md-5'>
            <Row className='pt-md-5 h-100'>
                <Col xs={12} md={1} className='d-flex flex-md-column justify-content-between align-items-center ps-4 pt-3 p-md-0'>
                    <AiOutlineMail size={37} />
                    <Navigation />
                    <div className="d-none d-md-block"></div>
                </Col>
                <Col xs={10}>
                    <Row ref={parRef} className='position-relative'>
                        <Col xs={12} md={6} className='p-5'>
                            <p className={`m-0 japanese ${showHero ? 'visible' : ''}`}>デザイン</p>
                            <div className="text-outline">
                                <TextReveal text="Keelan" visible={showHero} className="mb-0" />
                                <TextReveal text="Matthews" visible={showHero} />
                            </div>
                            <p className={`fs-2 slogan ${showHero ? 'visible' : ''}`}>
                                <TextTransition springConfig={presets.gentle} inline>
                                    {TEXTS[index % TEXTS.length]}
                                </TextTransition>
                                &nbsp;de
                                <TextTransition springConfig={presets.gentle} inline>
                                    {TEXTS2[index % TEXTS2.length]}
                                </TextTransition>
                                er.
                            </p>
                            <Button variant={`outline-secondary button ${showHero ? 'visible' : ''}`} size="lg" className='mt-5'>download cv</Button>
                        </Col>
                        <Col xs={12} md={6}>
                            <div className="position-relative h-100 w-100">
                                <div className={`position-absolute painting ${showHero ? 'visible' : ''}`}>
                                    <MouseParallax isAbsolutelyPositioned shouldResetPosition strength={0.01} parallaxContainerRef={parRef}>
                                        <div className="painting-container">
                                            <WaveImage />
                                        </div>
                                    </MouseParallax>
                                </div>
                                <div className={`position-absolute circle ${showHero ? 'visible' : ''}`}>
                                    <MouseParallax isAbsolutelyPositioned shouldResetPosition strength={0.03} parallaxContainerRef={parRef}>
                                        <div className='bg-primary rounded-circle circle-container'></div>
                                    </MouseParallax>
                                </div>
                                <div className={`bg-primary rounded-circle click-circle ${hideCircle ? 'clicked' : ''} ${showHero ? 'd-none' : ''}`} onClick={() => revealHero()} style={{ width: '150px', height: '150px' }}></div>
                                <div className={`position-absolute statue ${showHero ? 'visible' : ''}`}>
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
                <Col xs={2} md={1} className="d-flex flex-column justify-content-between align-items-center h-100">
                    <div className="page-number">
                        <p className='fs-1'>00</p>
                    </div>
                    <div className='scroll-down d-flex flex-column justify-content-center align-items-center'>
                        <p className={`fs-5 scroll-down-text ${showHero ? 'visible' : ''}`}>scroll down</p>
                        <div className={`mt-5 scroll-line ${showHero ? 'visible' : ''}`}></div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
