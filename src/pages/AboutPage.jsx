import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SectionTransition from '../components/SectionTransition'
import Skills from '../components/About/Skills'
import Layout from '../components/Layout';
import SideColumns from '../components/SideColumns'

export default function AboutPage({ section }) {
	return (
		<Layout title="Keelan Matthews | About me">
			<SideColumns scrollY={true} activeSection="about" page={1} entered={true}>
				<Col xs={10} className="scrollable vh-100">
					<div className="vh-100 d-flex align-items-center justify-content-center">
						<SectionTransition {...section} />
					</div>
					<div className="vh-100 d-flex flex-column justify-content-center">
						<h1 className="fw-bold heading-line mb-5">Introduction</h1>
						<Row className="d-flex align-items-center">
							<Col xs={12} md={6} className="d-flex justify-content-end">
								<div className="w-75">
									<small className="m-0">自分</small>
									<p className='fw-bold mb-4 fs-3'>Who I am</p>
									<p className="fs-5 border-start border-2 border-primary ps-3">
										I am an aspiring Full Stack Developer from <span className="fw-bold">Johannesburg, South Africa</span>. Growing up, I have always had an insatiable desire for creativity and perfection. This, coupled up with my thorough enjoyment in coding, lead me down my current path.
										The idea of being able to produce anything from scratch intrigues me. This also includes designing vector graphics, 3D renders, animations and even music.<br /><br />
										I am able to pick up new skills very quickly, and always complete my deadlines early. In the event of time constraints, I <span className="fw-bold">thrive</span> under pressure.
									</p>
								</div>
							</Col>
							<Col xs={12} md={6} className="text-center">
								<img src="images/portrait.webp" alt="" />
							</Col>
						</Row>
					</div>

					<div className="vh-100 d-flex flex-column justify-content-center">
						<h1 className="fw-bold heading-line mb-5">Skill Set</h1>
						<Skills />
					</div>
				</Col>
			</SideColumns>
		</Layout>
	)
}
