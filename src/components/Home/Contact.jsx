import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import TextReveal from '../animations/TextReveal'

// const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }

export default function Contact({ visible }) {
    return (
        <div id="contact" className='d-flex flex-column align-items-center'>
            <div className="bigger-text2">
                <TextReveal text="Contact Me" visible={visible} />
            </div>

            <Form className="w-50">
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                    >
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicSubject">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Subject"
                    >
                        <Form.Control type="text" placeholder="Subject" />
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicMessage">
                    <Form.Control as="textarea" rows={5} placeholder="Message" />
                </Form.Group>

                <div className="w-100 text-end">
                    <Button variant="primary" type="submit" size="lg">
                        Send
                    </Button>
                </div>
            </Form>
        </div>
    )
}
