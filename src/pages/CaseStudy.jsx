import React, { useState, useEffect } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Layout from '../components/Layout'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import SideColumns from '../components/SideColumns'
// import SectionTransition from '../components/SectionTransition'
import Section from '../components/Section'
import matter from 'gray-matter'
import Skill from '../components/About/Skill'

export default function CaseStudy() {
    const [postContent, setPostcontent] = useState('')
    const [client, setClient] = useState({})
    const [challenge, setChallenge] = useState({})
    const [techStack, setTechStack] = useState({})
    const [approach, setApproach] = useState({})
    const [mdArray, setMdArray] = useState([])

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

        setMdArray([client, challenge, techStack, approach])
    }, [postContent])


    return (
        <Layout title="Keelan Matthews | Projects">
            <SideColumns scrollY={true} activeSection="projects" page={2} entered={true} caseStudy={true}>
                <Col xs={10} className="scrollable vh-100">
                    <div className="vh-100 d-flex align-items-center justify-content-center">
                        <Section title={title} japanese={japanese} switchVar={true} visible={true} cta="case study" site={true} />
                    </div>

                    <Col xs={{ span: 6, offset: 3 }}>
                        {
                            mdArray.map((md, index) => {
                                return (
                                    <MdSection md={md} key={index} index={index} first={index === 0} stack={index === 2} />
                                )
                            })
                        }
                    </Col>
                </Col>
            </SideColumns>
        </Layout>
    )
}

const MdSection = ({ md, index, first = false, stack = false }) => {
    return (
        <Row>
            <Col xs={1} className={`position-relative p-0 ${first && 'mt-5'}`}>
                <div className="h-100 border-start border-1 border-muted"></div>
                <div className={`position-absolute ${!first && 'mt-5'} case-study-circle`}>
                    <div className={`rounded-circle bg-muted ${!first && 'mt-4'} p-1`}></div>
                </div>
            </Col>
            <Col xs={9} className="py-5">
                <p className='fs-5 mb-0 pb-0'>0{index}</p>
                <div className="fw-bold mb-4">
                    <h2>{md && md.data && getTitle(md.data)}</h2>
                </div>
                {
                    stack ?
                        <div className="d-flex flex-wrap">
                            {
                                md && md.content && md.content.split(' ').map((skill, index) => <Skill skill={skill} key={index} basis="30%" />)
                            }
                        </div>
                        :
                        <ReactMarkdown children={md && md.content} remarkPlugins={[remarkGfm]} />
                }
            </Col>
        </Row>
    )
}

const getTitle = (data) => data.split('title:')[1].split('image:')[0].trim()
const getImage = (data) => data.split('image:')[1].trim()