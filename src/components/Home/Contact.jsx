import React, { useState, useRef } from 'react'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import TextReveal from '../animations/TextReveal'
import { Formik, ErrorMessage, Form, Field } from 'formik'
import * as Yup from "yup"
import { motion } from 'framer-motion/dist/framer-motion'
import emailjs from '@emailjs/browser'

const transition = { duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }

const controlVariants = {
    hidden: { opacity: 0, width: "0%" },
    visible: { opacity: 1, width: "100%" }
}

const buttonVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
}

const Schema = Yup.object({
    subject: Yup.string()
        .matches(
            /^[a-zA-Z0-9]{0,20}$/,
            'Subject must be 20 characters or less'
        )
        .required("Please enter a subject"),
    email: Yup.string()
        .email("Please enter a valid email")
        .required("Please enter an email"),
    // message: Yup.string()
    //     .required("Please enter a message")
});

export default function Contact({ visible }) {
    const [showToast, setShowToast] = useState(false);

    const form = useRef();

    const sendEmail = () => {
        emailjs.sendForm('service_8h2e55v', 'template_9fmnbng', form.current, 'EMotZoMbsTqV390uC')
            .then((result) => {
                setShowToast(true);
            }, (error) => {
                console.log(error.text);
            });
    };

    const getCurrentDate = () => {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;

        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

        return `${day} ${monthNames[month - 1]}`
    }

    return (
        <div className='d-flex flex-column align-items-center'>
            <div className="bigger-text2">
                <TextReveal text="Contact Me" visible={visible} />
            </div>
            <ToastContainer className="p-3" position="top-end">
                <Toast onClose={() => setShowToast(false)} show={showToast} delay={2000} autohide>
                    <Toast.Header closeButton={false}>
                        <strong className="me-auto">Sent</strong>
                        <small>{getCurrentDate()}</small>
                    </Toast.Header>
                    <Toast.Body>You message has been sent!</Toast.Body>
                </Toast>
            </ToastContainer>
            <Formik
                initialValues={{ subject: '', email: '', message: '' }}
                validationSchema={Schema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setSubmitting(true);
                    sendEmail();
                    resetForm();
                    setSubmitting(false);
                }}
            >

                {({ errors, touched, isSubmitting }) => (

                    <Form className="w-50" ref={form}>
                        <FormikInput type="Email" errors={errors} touched={touched} visible={visible} />
                        <FormikInput type="Subject" errors={errors} touched={touched} visible={visible} />
                        <FormikInput type="Message" errors={errors} touched={touched} visible={visible} />

                        <motion.div
                            variants={buttonVariants}
                            initial="hidden"
                            animate={visible ? "visible" : "hidden"}
                            transition={{ ...transition, delay: 0.8 }}
                            className="w-100 text-end"
                        >
                            <Button variant="primary" type="submit" size="lg" disabled={isSubmitting}>
                                {
                                    isSubmitting ?
                                        <div className="spinner-border text-light" role="status">
                                            <span className="visually-hidden">Sending...</span>
                                        </div>
                                        :
                                        "Send"
                                }
                            </Button>
                        </motion.div>
                    </Form>

                )}
            </Formik>
        </div>
    )
}
const FormikInput = ({ type, errors, touched, visible }) => {
    const name = type.toLowerCase();
    const label = `${type} ${type === 'Email' ? ' address' : ''}`;
    let settings = {};
    let delay = 0.2;

    switch (type) {
        case "Email":
            settings = {
                type: "email",
                placeholder: "Email"
            }
            break;
        case "Subject":
            settings = {
                type: "text",
                placeholder: "Subject"
            };
            delay = 0.4;
            break;
        case "Message":
            settings = {
                as: "textarea",
                rows: "6",
                placeholder: "Message"
            };
            delay = 0.6;
            break;
        default:
            break;
    }

    return (
        <motion.div
            variants={controlVariants}
            initial="hidden"
            animate={visible ? "visible" : "hidden"}
            transition={{ ...transition, delay: delay }}
        >
            <Field name={name}>
                {({ field }) => (
                    <FormGroup className="mb-3" controlId={`formBasic${type}`}>
                        <FloatingLabel controlId="floatingInput" label={label}>
                            <FormControl {...settings} {...field} className={touched.email && errors.email ? "is-invalid" : ""} />
                            <ErrorMessage
                                component="div"
                                name={name}
                                className="invalid-feedback"
                            />
                        </FloatingLabel>
                    </FormGroup>
                )}
            </Field>
        </motion.div>
    )
}