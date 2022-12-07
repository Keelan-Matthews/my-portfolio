import React, { useState, useEffect } from 'react'
import Col from 'react-bootstrap/Col'
import Layout from '../components/Layout'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import SideColumns from '../components/SideColumns'
import SectionTransition from '../components/SectionTransition'

export default function CaseStudy() {
    const [postContent, setPostcontent] = useState('')

    const slug = window.location.pathname.split('/')[2]
    const title = slug === "rudasa" ? "RuDASA" : slug.split('-').join(' ').replace(/\b\w/g, l => l.toUpperCase())

    const japaneseArray = [
        {
            "rudasa": "ルダサ",
            "yacht-portfolio": "ヨット"
        }
    ]

    const japanese = japaneseArray[0][slug]

    useEffect(() => {

        import(`../case-studies/${slug}.md`)
            .then(res =>
                fetch(res.default)
                    .then(response => response.text())
                    .then(response => setPostcontent(response))
                    .catch(err => console.log(err))
            )
    }, [])

    return (
        <Layout title="Keelan Matthews | Projects">
            <SideColumns scrollY={true} activeSection="projects" page={2} entered={true}>
                <Col xs={10} className="scrollable vh-100">
                    <div className="vh-100 d-flex align-items-center justify-content-center">
                        <SectionTransition title={title} japanese={japanese} />
                    </div>

                    <Col xs={{ span: 8, offset: 2 }}>
                        <ReactMarkdown children={postContent} remarkPlugins={[remarkGfm]} />
                    </Col>
                </Col>
            </SideColumns>
        </Layout>
    )
}
