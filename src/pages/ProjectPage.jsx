import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BiArrowBack } from 'react-icons/bi'
import Layout from '../components/Layout'
import ProjectSection from '../components/Projects/ProjectSection'
import ProjectTransition from '../components/Projects/ProjectTransition'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import ReactFullPage from '@fullpage/react-fullpage'
import { motion } from 'framer-motion/dist/framer-motion'

const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }

export default function ProjectPage() {
	const [page, setPage] = useState(0)

	return (
		<Layout title="Keelan Matthews | Projects">
			<Row>
				<Col xs={12} md={1}>
					<Row className='d-flex flex-md-column justify-content-between align-items-center ps-4 pt-5 ps-md-0 h-100'>
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={transition}
							className='d-flex justify-content-center'
						>
							<Link to="/#projects-section" className="text-dark w-50">
								<BiArrowBack size={37} />
							</Link>
						</motion.div>

						<Navigation activeSection={'projects'} />
						<div className="d-none d-md-block"></div>
					</Row>
				</Col>
				<Col xs={10} className="scrollable">
					<ReactFullPage
						onLeave={(origin, destination) => {
							setPage(destination.index);
						}}
						render={() => {
							return (
								<ReactFullPage.Wrapper>
									<ProjectTransition />
									<ProjectSection activePage={page} />
								</ReactFullPage.Wrapper>
							)
						}}
					/>
				</Col>
				<Col xs={2} md={1}>
					<Row className="d-flex flex-column justify-content-between align-items-center pt-5 h-100">
						<div className="page-number">
							<p className='fs-1'>02</p>
						</div>
					</Row>
				</Col>
			</Row>
		</Layout>
	)
}
