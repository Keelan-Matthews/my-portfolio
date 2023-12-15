import React, { useState, useEffect } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Layout from '../components/Layout'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import SideColumns from '../components/SideColumns'
import Section from '../components/Section/Section'
import matter from 'gray-matter'
import Skill from '../components/About/Skill'
import { projects } from '../data/project-list'

export default function CaseStudy() {
    const [mdArray, setMdArray] = useState([]);
    const [hasMd, setHasMd] = useState(true);

    const slug = window.location.pathname.split('/')[2];
    // const title = slug === "rudasa" ? "RuDASA" : slug.split('-').join(' ').replace(/\b\w/g, l => l.toUpperCase())

    const project = projects.filter(p => {
        const projectSlug = p.title.split(' ').join('-').toLowerCase()
        if (projectSlug === slug) 
            return p;

        return null;
    })[0];

    // get the japanese from "projects" that matches the slug
    const japanese = project.japanese;
    const site = project.site;
    const title = project.title;

    useEffect(() => {
        getMd()
            .then(res => {
                setMdArray([
                    res.sections[0],
                    res.sections[1],
                    res.sections[2],
                    res.sections[3],
                    res.sections[4],
                    res.sections[5]
                ]);
            })
            .catch(error => setHasMd(false));
    }, []);


    const getMd = () => {
        return new Promise((resolve, reject) => {
            import(`../case-studies/${slug}.md`)
                .then(res =>
                    fetch(res.default)
                        .then(response => response.text())
                        .then(response =>
                            resolve(
                                matter(response, {
                                    section: function (section, file) {
                                        section.content = section.content.trim() + '\n';
                                    }
                                }
                                ))
                        )
                        .catch(err => reject(err))
                )
        })
    }

    return (
        <Layout title="Keelan Matthews | Projects">
            <SideColumns scrollY={true} activeSection="projects" page={2} entered={true} caseStudy={true}>
                <Col xs={10} className="scrollable vh-100">
                    <div className="vh-100 d-flex align-items-center justify-content-center">
                        <Section title={title} japanese={japanese} switchVar={true} visible={true} cta="case study" site={site} />
                    </div>
                    {
                        hasMd ?
                            <Col xs={{ span: 8, offset: 2 }}>
                                {
                                    mdArray.map((md, index) => {
                                        return (
                                            <MdSection md={md} key={index} index={index} slug={slug} />
                                        )
                                    })
                                }
                            </Col>
                            :
                            <Col xs={{ span: 8, offset: 2 }}>
                                <div className='d-flex w-100 justify-content-center align-items-center my-5'>
                                    <h1>in progress...</h1>
                                </div>

                            </Col>
                    }
                </Col>
            </SideColumns>
        </Layout>
    )
}

const MdSection = ({ md, index, slug }) => {
    const first = index === 0;
    const stack = index === 2;
    const website = index === 4;
    let webContent = []

    if (website) {
        webContent = md.data.split(', ')
    }

    return (
        <Row>
            {
                website ?
                    webContent.map((content, index) => {
                        return (
                            <Col xs={12} key={index}>
                                <div className="border border-1 border-muted rounded-top p-2">
                                    <p className="text-muted p-o m-0 fs-4">•••</p>
                                </div>
                                <img src={`/images/case-studies/${slug}/${content}`} alt="" width={'100%'} className="border border-1 border-muted mb-3" />
                            </Col>
                        )
                    })
                    :
                    <>
                        <Col xs={{ span: 1, offset: 2 }} className={`position-relative p-0 ${first && 'mt-5'}`}>
                            <div className="h-100 border-start border-1 border-muted"></div>
                            <div className={`position-absolute ${!first && 'mt-5'} case-study-circle`}>
                                <div className={`rounded-circle bg-muted ${!first && 'mt-4'} p-1`}></div>
                            </div>
                        </Col>
                        <Col xs={7} className="py-5">
                            <p className='fs-5 mb-0 pb-0'>0{index}</p>
                            <div className="fw-bold mb-4">
                                <h2>{getTitle(md.data)}</h2>
                            </div>
                            {
                                stack ?
                                    <div className="d-flex flex-wrap">
                                        {
                                            md.content.split(' ').map((skill, index) => <Skill skill={skill} key={index} basis="40%" />)
                                        }
                                    </div>
                                    :
                                    <ReactMarkdown children={md.content} remarkPlugins={[remarkGfm]} />
                            }
                            <div className={`p-5 ps-0 ${stack && 'd-none'}`}>
                                <img src={`/images/case-studies/${slug}/${getImage(md.data)}`} alt="" width={'90%'} />
                            </div>
                        </Col>
                    </>
            }
        </Row>
    )
}

const getTitle = (data) => data.split('title:')[1].split('image:')[0].trim()
const getImage = (data) => {
    const img = data.split('image:')[1]
    if (img) {
        return img.split('site:')[0].trim()
    }
    return ''
}