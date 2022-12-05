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
                        <NavLine section='hero' activeSection={activeSection} />
                        <NavLine section='about' activeSection={activeSection} />
                        <NavLine section='projects' activeSection={activeSection} />
                        <NavLine section='contact' activeSection={activeSection} />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

const NavLine = ({ section, activeSection }) => {
    return (
        <Nav.Link href={`/#${section}`} className='p-0 nav-group'>
            <motion.p
                variants={navVariants}
                initial="hidden"
                whileHover="visible"
                transition={transition}
                className='m-0 nav-item'
            >
                {section}
            </motion.p>
            <motion.div 
                variants={lineVariants}
                initial="notActive"
                animate={activeSection === section ? 'active' : 'notActive'}
                transition={transition}
                className="nav-line"
            >
            </motion.div>
        </Nav.Link>
    )
}

const transition = { duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] }

const navVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
}

const lineVariants = {
    notActive: { width: 30 },
    active: { width: 60 }
}