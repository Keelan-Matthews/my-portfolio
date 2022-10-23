import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AboutTransition from '../components/About/AboutTransition'
import Skills from '../components/About/Skills'
import { BiArrowBack } from 'react-icons/bi'
import Layout from '../components/Layout';

export default function AboutPage() {
	return (
		<Layout title="Keelan Matthews | About me">
			<Row className='pt-md-5 vh-100'>
				<Col xs={12} md={1} className="d-flex justify-content-center">
					<BiArrowBack size={37} />
				</Col>
				<Col xs={10} className="scrollable">
					<AboutTransition />
					<Row className="d-flex align-items-center py-5">
						<Col xs={12} md={6} className="d-flex justify-content-end">
							<div className="w-75">
								<h2 className='fw-bold mb-4'>Who I am</h2>
								<p className="fs-5 border-start border-3 ps-3">
									I am an aspiring Full Stack Developer from <span className="fw-bold">Johannesburg, South Africa</span>. Growing up, I have always had an insatiable desire for creativity and perfection. This, coupled up with my thorough enjoyment in coding, lead me down my current path.
									I have a thorough passion for coding, be it in programming or markup languages. The idea of being able to produce anything from scratch intrigues me. This also includes designing vector graphics, 3D renders, animations and even music.<br /><br />
									I am able to pick up new skills very quickly, and always complete my deadlines early. In the event of time constraints, I <span className="fw-bold">thrive</span> under pressure.
								</p>
							</div>
						</Col>
						<Col xs={12} md={6} className="text-center">
							<img src="images/portrait.webp" alt="" />
						</Col>
					</Row>
					<Skills />
				</Col>
				<Col xs={2} md={1}>
					<Row className="d-flex flex-column justify-content-between align-items-center h-100">
						<div className="page-number">
							<p className='fs-1'>01</p>
						</div>
					</Row>
				</Col>
			</Row>
		</Layout>
	)
}
