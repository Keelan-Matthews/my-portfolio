import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { motion } from 'framer-motion/dist/framer-motion'

export default function Navigation({ activeSection }) {
    return (
        <Navbar expand="md" className="navigation">
            <Container fluid={true} className="p-0">
                <Navbar.Toggle aria-controls="nav-collapse" className="p-0" />
                <Navbar.Collapse id="nav-collapse" className="d-flex justify-content-center">
                    <Nav className='d-flex flex-column'>
                        <Nav.Link href="/#hero" className='p-0 nav-group'>
                            <p className='m-0 nav-item'>hero</p>
                            <div className={`nav-line ${activeSection === 'hero' ? 'active' : ''}`}></div>
                        </Nav.Link>
                        <Nav.Link href="/#about" className='p-0 nav-group'>
                            <p className='m-0 nav-item'>about</p>
                            <div className={`nav-line ${activeSection === 'about' ? 'active' : ''}`}></div>
                        </Nav.Link>
                        <Nav.Link href="/#projects" className='p-0 nav-group'>
                            <p className='m-0 nav-item'>projects</p>
                            <div className={`nav-line ${activeSection === 'projects' ? 'active' : ''}`}></div>
                        </Nav.Link>
                        <Nav.Link href="/#contact" className='p-0 nav-group'>
                            <p className='m-0 nav-item'>contact</p>
                            <div className={`nav-line ${activeSection === 'contact' ? 'active' : ''}`}></div>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
