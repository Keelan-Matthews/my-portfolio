import React, { useRef, useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import WaveImage from './WaveImage'
import { MouseParallax } from 'react-just-parallax'
import TextTransition, { presets } from "react-text-transition"
import TextReveal from '../animations/TextReveal'

export default function Hero(props) {
    const parRef = useRef()
    const [index, setIndex] = useState(0)
    const [hideCircle, setHideCircle] = useState(
        localStorage.getItem('visited') ? true : false
    )
    const [showHero, setShowHero] = useState(
        localStorage.getItem('visited') ? true : false
    )
    const visited = localStorage.getItem('visited')

    props.setScrollY(
        localStorage.getItem('visited') ? true : false
    )

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
            props.setScrollY(true)
            setTimeout(() => {
                localStorage.setItem('visited', true)
            }, 1000)
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
        <div className='vh-100 pt-md-5' id="hero" ref={props.innerRef}>
            <Row ref={parRef} className='position-relative'>
                <Col xs={12} md={6} className='p-5'>
                    <p className={`m-0 japanese ${showHero ? 'visible' : ''}`}>デザイン</p>
                    <div className="text-outline">
                        {
                            visited ?
                                <>
                                    <div className="keelan-text">
                                        <h2 style={{fontSize: '7rem'}}>Keelan</h2>
                                    </div>
                                    <h2 style={{fontSize: '7rem'}}>Matthews</h2>
                                </>
                                :
                                <>
                                    <div className="keelan-text">
                                        <TextReveal text="Keelan" visible={showHero} className="mb-0" />
                                    </div>
                                    <TextReveal text="Matthews" visible={showHero} />
                                </>

                        }
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
                        <div className={`position-absolute painting ${visited ? 'visible-visited' :
                            showHero ? 'visible' : ''
                            }`}>
                            <MouseParallax isAbsolutelyPositioned shouldResetPosition strength={0.01} parallaxContainerRef={parRef}>
                                <div className="painting-container">
                                    <WaveImage img="painting.webp" />
                                </div>
                            </MouseParallax>
                        </div>
                        <div className={`position-absolute circle ${showHero ? 'visible' : ''}`}>
                            <MouseParallax isAbsolutelyPositioned shouldResetPosition strength={0.03} parallaxContainerRef={parRef}>
                                <div className='bg-primary rounded-circle circle-container'></div>
                            </MouseParallax>
                        </div>
                        <div className={`bg-primary rounded-circle click-circle ${hideCircle ? 'clicked' : ''} ${showHero ? 'd-none' : ''}`} onClick={() => revealHero()} style={{ width: '150px', height: '150px' }}></div>
                        <div className={`position-absolute statue ${visited ? 'visible-visited' :
                            showHero ? 'visible' : ''
                            }`}>
                            <MouseParallax isAbsolutelyPositioned shouldResetPosition strength={0.05} parallaxContainerRef={parRef}>
                                <div>
                                    <img src="/images/statue.png" alt="statue" width={400} />
                                </div>
                            </MouseParallax>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
