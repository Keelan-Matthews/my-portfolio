import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default function Project({ japanese, title, site }) {

    const slug = title.replace(/\s+/g, '-').toLowerCase();
    const titleArray = title.split(' ');
    const titleArrayLength = titleArray.length;

    return (
        <div className="vh-100 scroll-child">
            <Row className="d-flex align-items-center">
                <Col xs={12} md={6} className="d-flex justify-content-end">
                    <p className='fs-4 rotate'>{japanese}</p>
                    <img src={`/images/${slug}.webp`} className='image-height lower-opacity' alt="" />
                </Col>
                <Col xs={12} md={6}>
                    <div className="text-outline">
                        {
                            titleArrayLength > 1 ?
                                <div>
                                    <h1 className="display-4 move-down">{
                                        titleArray.slice(0, titleArrayLength - 2).join(' ')
                                    }</h1>
                                    <h1 className="transform-left m-0" style={{ fontSize: '9rem' }}>{
                                        titleArray.slice(titleArrayLength - 2).join(' ')
                                    }</h1>
                                </div>
                                :
                                <h1 className="transform-left m-0" style={{ fontSize: '9rem' }}>{title}</h1>
                        }

                        <div>
                            <Button href={`/projects/${slug}`} variant="outline-secondary" size="lg" className='mt-4'>case study</Button>
                            <Button href={site} size="lg" variant="outline-light text-dark" className='mt-4'>view site</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
