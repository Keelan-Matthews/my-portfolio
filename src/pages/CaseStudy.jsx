import React, { useState, useEffect } from 'react'
import Col from 'react-bootstrap/Col'
import Layout from '../components/Layout'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import SideColumns from '../components/SideColumns'
import SectionTransition from '../components/SectionTransition'
import matter from 'gray-matter'
import TextReveal from '../components/animations/TextReveal'

export default function CaseStudy() {
    const [postContent, setPostcontent] = useState('')
    const [client, setClient] = useState({})
    const [challenge, setChallenge] = useState({})
    const [techStack, setTechStack] = useState({})
    const [approach, setApproach] = useState({})

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
                    .then(response =>
                        setPostcontent(
                            matter(response, {
                                section: function (section, file) {
                                    section.content = section.content.trim() + '\n';
                                }
                            }
                            ))
                    )
                    .catch(err => console.log(err))
            )
    }, [])

    useEffect(() => {
        setClient(postContent && postContent.sections[0])
        setChallenge(postContent && postContent.sections[1])
        setTechStack(postContent && postContent.sections[2])
        setApproach(postContent && postContent.sections[3])
    }, [postContent])


    return (
        <Layout title="Keelan Matthews | Projects">
            <SideColumns scrollY={true} activeSection="projects" page={2} entered={true}>
                <Col xs={10} className="scrollable vh-100">
                    <div className="vh-100 d-flex align-items-center justify-content-center">
                        <SectionTransition title={title} japanese={japanese} />
                    </div>

                    <Col xs={{ span: 6, offset: 3 }}>
                        <MdSection md={client} heading="The Client" />
                        <MdSection md={challenge} heading="The Challenge" />
                        <MdSection md={techStack} heading="Tech Stack" />
                        <MdSection md={approach} heading="My Approach" />
                    </Col>
                </Col>
            </SideColumns>
        </Layout>
    )
}

const MdSection = ({ md, heading }) => {
    return (
        <div className="px-5">
            <div className="fw-bold">
                <TextReveal text={heading} visible={true} />
            </div>
            <ReactMarkdown children={ md && md.content } remarkPlugins={[remarkGfm]} />
        </div>
    )
}