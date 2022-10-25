import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import TextReveal from '../animations/TextReveal'
import { Link } from 'react-router-dom'

export default function AboutMe({ innerRef }) {
    return (
        <div className="vh-100" id="about" ref={innerRef}>
            <Row className="d-flex align-items-center">
                <Col xs={12} md={6} className="d-flex position-relative justify-content-end">
                    <p className='fs-4 rotate'>書誌</p>
                    <div className='bg-primary rounded-circle circle-container position-absolute circle-1'></div>
                    <img src="/images/about.webp" className='image-height' alt="" />
                </Col>
                <Col xs={12} md={6}>
                    <div className="text-outline">
                        <div className="bigger-text">
                            <h2>About me</h2>
                        </div>

                        <p className="fs-2">development through creativity</p>
                        <Link to='/about'>
                            <Button variant={`outline-secondary button visible`} size="lg" className='mt-4'>learn more</Button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
