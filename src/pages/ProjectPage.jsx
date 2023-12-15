import React, { useState } from 'react'
import Col from 'react-bootstrap/Col'
import Layout from '../components/Layout'
import ProjectSection from '../components/Projects/ProjectSection'
// import SectionTransition from '../components/SectionTransition'
import Section from '../components/Section/Section'
import ReactFullPage from '@fullpage/react-fullpage'
import SideColumns from '../components/SideColumns'
import Footer from '../components/Footer'
// import { projects } from '../data/project-list'

export default function ProjectPage({ section }) {
	const [page, setPage] = useState(0)

	return (
		<Layout title="Keelan Matthews | Projects">
			<SideColumns scrollY={true} activeSection="projects" page={2} entered={true}>
				<Col xs={10} className="scrollable">
					<ReactFullPage
						onLeave={(origin, destination) => {
							setPage(destination.index);
						}}
						render={({ state, fullpageApi }) => {
							return (
								<ReactFullPage.Wrapper>
									<div className="section">
										<Section {...section} switchVar={true} visible={true} />
									</div>
									<ProjectSection activePage={page} />
									<div className="section fp-auto-height">
										<Footer scrollToTop={() => fullpageApi.moveTo(1)} />
									</div>
								</ReactFullPage.Wrapper>
							)
						}}
					/>
				</Col>
			</SideColumns>
		</Layout>
	)
}
