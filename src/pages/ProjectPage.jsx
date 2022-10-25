import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BiArrowBack } from 'react-icons/bi'
import Layout from '../components/Layout'
import ProjectSection from '../components/Projects/ProjectSection'
import ProjectTransition from '../components/Projects/ProjectTransition'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'

export default function ProjectPage() {
	return (
		<Layout title="Keelan Matthews | Projects">
			<Row className='pt-md-5 vh-100'>
				<Col xs={12} md={1}>
					<Row className='d-flex flex-md-column justify-content-between align-items-center ps-4 pt-3 p-md-0 h-100'>
						<Link to="/#projects" className="text-dark w-50">
							<BiArrowBack size={37} />
						</Link>
						<Navigation activeSection={'projects'} />
						<div className="d-none d-md-block"></div>
					</Row>
				</Col>
				<Col xs={10} className="scrollable">
					<ProjectTransition />
					<ProjectSection />
				</Col>
				<Col xs={2} md={1}>
					<Row className="d-flex flex-column justify-content-between align-items-center h-100">
						<div className="page-number">
							<p className='fs-1'>02</p>
						</div>
					</Row>
				</Col>
			</Row>
		</Layout>
	)
}
