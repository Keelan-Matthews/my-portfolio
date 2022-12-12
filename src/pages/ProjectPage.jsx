import React, { useState } from 'react'
import Col from 'react-bootstrap/Col'
import Layout from '../components/Layout'
import ProjectSection from '../components/Projects/ProjectSection'
// import SectionTransition from '../components/SectionTransition'
import Section from '../components/Section'
import ReactFullPage from '@fullpage/react-fullpage'
import SideColumns from '../components/SideColumns'

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
						render={() => {
							return (
								<ReactFullPage.Wrapper>
									<div className="section">
										<Section {...section} switchVar={true} visible={true} />
									</div>
									<ProjectSection activePage={page} />
								</ReactFullPage.Wrapper>
							)
						}}
					/>
				</Col>
			</SideColumns>
		</Layout>
	)
}
