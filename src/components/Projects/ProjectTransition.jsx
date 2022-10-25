import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default function ProjectTransition() {
    const [enter, setEnter] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setEnter(true)
        }, 1000)
    }, [])
    return (
        <div className="vh-100 scroll-child">
            <Row className="d-flex align-items-center">
                <Col xs={12} md={6} className="d-flex position-relative justify-content-end">
                    <p className='fs-4 rotate'>事業</p>
                    <div className='bg-primary rounded-circle circle-container position-absolute circle-1'></div>
                    <img src="/images/projects.webp" className='image-height' alt="" />
                </Col>
                {/* <Col xs={12} md={6}>
                    <div className="text-outline">
                        <div className="bigger-text">
                            <h2>Projects</h2>
                        </div>

                        <p className="fs-2">view my top websites</p>
                        <Button variant={`outline-secondary button visible`} size="lg" className='mt-4'>catalogue</Button>
                    </div>
                </Col> */}
                <Col xs={12} md={6} className="move-down-2">
                    <div>
                        <div className="bigger-text">
                            <h2>Projects</h2>
                        </div>
                        <p className="fs-2 hide-slogan">view my top websites</p>
                    </div>

                    <div className="border-black-1 fs-5 mt-4 d-inline-block button-to-scroll p-2 px-3">
                        <span className='text-to-scroll'>catalogue</span>
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
