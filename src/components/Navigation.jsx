import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

export default function Navigation() {
    return (
        <Navbar expand="md" className="navigation">
            <Container fluid={true} className="p-0">
                <Navbar.Toggle aria-controls="nav-collapse" className="p-0" />
                <Navbar.Collapse id="nav-collapse">
                    <Nav className='d-flex flex-column'>
                        <Nav.Link href="#home" className='p-0'>
                            <p className='m-0 nav-item'>hero</p>
                            <div className="nav-line active"></div>
                        </Nav.Link>
                        <Nav.Link href="#home" className='p-0'>
                            <p className='m-0 nav-item'>about</p>
                            <div className="nav-line"></div>
                        </Nav.Link>
                        <Nav.Link href="#home" className='p-0'>
                            <p className='m-0 nav-item'>projects</p>
                            <div className="nav-line"></div>
                        </Nav.Link>
                        <Nav.Link href="#home" className='p-0'>
                            <p className='m-0 nav-item'>contact</p>
                            <div className="nav-line"></div>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
