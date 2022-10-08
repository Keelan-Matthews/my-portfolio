import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import Navigation from '../Navigation'
import WaveImage from './WaveImage'

export default function Hero() {
    return (
        <div className="vh-100 pt-5">
            <Row className='pt-5 h-100'>
                <Col xs={12} md={1} className='d-flex flex-column justify-content-between align-items-center'>
                    <FontAwesomeIcon icon={faEnvelope} className='fs-1' />
                    <Navigation />
                    <div></div>
                </Col>
                <Col xs={11} md={10}>
                    <Row>
                        <Col xs={12} md={6} className='p-5'>
                            <p className='m-0'>デザイン</p>
                            <h1 className='display-1 m-0'>Keelan</h1>
                            <h1 className='display-1'>Matthews</h1>
                            <p className='fs-2'>web developer.</p>
                            <Button variant="outline-secondary" size="lg" className='mt-5'>download cv</Button>
                        </Col>
                        <Col xs={12} md={6} className="position-relative">
                            <div className="position-absolute painting" style={{width: '700px', height: '800px'}}>
                                <WaveImage /> 
                            </div>
                            <div className='bg-primary rounded-circle position-absolute circle' style={{ width: '150px', height: '150px' }}></div>
                            <div className="position-absolute statue">
                                <img src="/images/statue.png" alt="statue" width={400} />
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
