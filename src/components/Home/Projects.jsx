import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import TextReveal from '../animations/TextReveal'
import { Link } from 'react-router-dom'

export default function AboutMe({ innerRef }) {
    return (
        <div className="vh-100" id="projects" ref={innerRef}>
            <Row className="d-flex align-items-center">
                <Col xs={12} md={6} className="d-flex position-relative justify-content-end">
                    <p className='fs-4 rotate'>事業</p>
                    <div className='bg-primary rounded-circle circle-container position-absolute circle-1'></div>
                    <img src="/images/projects.jpg" className='image-height' alt="" />
                </Col>
                <Col xs={12} md={6}>
                    <div className="text-outline">
                        <div className="bigger-text">
                            <TextReveal text="Projects" visible={true} />
                        </div>

                        <p className="fs-2">view my top websites</p>
                        <Link to='/projects'>
                            <Button variant={`outline-secondary button visible`} size="lg" className='mt-4'>catalogue</Button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
