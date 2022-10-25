import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function AboutTransition() {
    const [enter, setEnter] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setEnter(true)
        }, 1000)
    }, [])

    return (
        <div className="vh-100">
            <Row className="d-flex align-items-center">
                <Col xs={12} md={6} className="d-flex position-relative justify-content-end">
                    <p className='fs-4 rotate'>書誌</p>
                    <div className='bg-primary rounded-circle circle-container position-absolute circle-1'></div>
                    <img src="/images/about.webp" className='image-height' alt="" />
                </Col>
                <Col xs={12} md={6} className="move-down-2">
                    <div>
                        <div className="bigger-text">
                            <h2>About me</h2>
                        </div>
                        <p className="fs-2 hide-slogan">development through creativity</p>
                    </div>

                    <div className="border-black-1 fs-5 mt-4 d-inline-block button-to-scroll p-2 px-3">
                        <span className='text-to-scroll'>learn more</span>
                    </div>
                    <div className='scroll-down d-flex flex-column align-items-center w-25'>
                        <p className={`fs-5 scroll-down-text-transition ${enter ? 'visible' : ''}`}>scroll down</p>
                        <div className={`mt-5 scroll-line-transition ${enter ? 'visible' : ''}`}></div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
