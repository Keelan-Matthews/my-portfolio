import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiOutlineMail } from 'react-icons/ai'
import Navigation from './Navigation'

export default function SideColumns({ children, scrollY, activeSection, page }) {

    return (
        <>
            <Row className='pt-md-5 vh-100'>
                <Col xs={12} md={1}>
                    <Row className='d-flex flex-md-column justify-content-between align-items-center ps-4 pt-3 p-md-0 h-100'>
                        <AiOutlineMail size={37} />
                        <Navigation activeSection={activeSection} />
                        <div className="d-none d-md-block"></div>
                    </Row>
                </Col>
                {children}
                <Col xs={2} md={1}>
                    <Row className="d-flex flex-column justify-content-between align-items-center h-100">
                        <div className="page-number">
                            <p className='fs-1'>0{page}</p>
                        </div>
                        <div className='scroll-down d-flex flex-column justify-content-center align-items-center'>
                            <p className={`fs-5 scroll-down-text ${scrollY ? 'visible' : ''}`}>scroll down</p>
                            <div className={`mt-5 scroll-line ${scrollY ? 'visible' : ''}`}></div>
                        </div>
                    </Row>
                </Col>
            </Row>
        </>
    )
}
