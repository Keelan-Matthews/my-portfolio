import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Layout from '../components/Layout'
import SideColumns from '../components/SideColumns'
import Col from 'react-bootstrap/Col'

export default function NotFound() {
    return (
        <Layout title="Error 404">
            <SideColumns scrolY={true} activeSection="none" page={"-"}>
                <Col xs={10} className="scrollable vh-100 d-flex align-items-center justify-content-center flex-column">
                    <div className="position-relative">
                        <h1 className="display-1">404</h1>
                        <div className='bg-primary rounded-circle p-5 position-absolute' style={{left: -50, top: -50, zIndex: -3}}></div>
                    </div>
                    
                    <p className="mb-5">Uh oh, you're not meant to be here. Here's a way out:</p>
                    <Link to="/">
                        <Button variant="outline-secondary">Go home</Button>
                    </Link>
                </Col>
            </SideColumns>
        </Layout>
    )
}
