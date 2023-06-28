import React from 'react'
import Col from 'react-bootstrap/Col'
// import SectionTransition from '../components/SectionTransition'
import Section from '../components/Section/Section'
import Skills from '../components/About/Skills'
import Layout from '../components/Layout';
import SideColumns from '../components/SideColumns'
import Introduction from '../components/About/Introduction'
import { useInView } from 'react-intersection-observer'

export default function AboutPage({ section }) {
	const options = {
		threshold: 0.6,
	}

	const [introRef, inViewIntro] = useInView(options)
	const [skillsRef, inViewSkills] = useInView(options)

	return (
		<Layout title="Keelan Matthews | About me">
			<SideColumns scrollY={true} activeSection="about" page={1} entered={true}>
				<Col xs={10} className="scrollable vh-100">
					<div className="vh-100 d-flex justify-content-center align-items-center">
						<Section {...section} switchVar={true} visible={true} />
					</div>

					<div ref={introRef}>
						<Introduction inView={inViewIntro} />
					</div>

					<div ref={skillsRef}>
						<Skills inView={inViewSkills} />
					</div>
				</Col>
			</SideColumns>
		</Layout>
	)
}
