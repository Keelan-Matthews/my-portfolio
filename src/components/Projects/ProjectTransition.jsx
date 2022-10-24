import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default function ProjectTransition() {
    return (
        <div className="vh-100">
            <Row className="d-flex align-items-center">
                <Col xs={12} md={6} className="d-flex position-relative justify-content-end">
                    <p className='fs-4 rotate'>事業</p>
                    <div className='bg-primary rounded-circle circle-container position-absolute circle-1'></div>
                    <img src="/images/projects.jpg" className='image-height' alt="" />
                </Col>
                <Col xs={12} md={6}>
                    <div className="text-outline">
                        <div className="bigger-text">
                            <h2>Projects</h2>
                        </div>

                        <p className="fs-2">view my top websites</p>
                        <Button variant={`outline-secondary button visible`} size="lg" className='mt-4'>catalogue</Button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
