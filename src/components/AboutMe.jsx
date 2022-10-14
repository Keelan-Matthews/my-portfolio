import React, { useRef, useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
// import { AiOutlineMail } from 'react-icons/ai'
// import Navigation from './Navigation'
// import WaveImage from './WaveImage'
// import { MouseParallax } from 'react-just-parallax'
// import TextTransition, { presets } from "react-text-transition"
import TextReveal from './animations/TextReveal'

export default function AboutMe() {
    return (
        <div>
            <Row>
                <Col xs={12} md={6}>
                    <p>書誌</p>
                    <div className='bg-primary rounded-circle circle-container'></div>
                    {/* <WaveImage img="about.jpg" /> */}
                </Col>
                <Col xs={12} md={6}>
                    <div className="text-outline">
                        <TextReveal text="About Me" visible={true} className="mb-0" />
                        <p className="fs-2">development through creativity</p>
                        <Button variant={`outline-secondary button`} size="lg" className='mt-5'>learn more</Button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
