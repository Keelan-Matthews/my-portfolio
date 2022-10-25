import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AboutTransition from '../components/About/AboutTransition'
import Skills from '../components/About/Skills'
import { BiArrowBack } from 'react-icons/bi'
import Layout from '../components/Layout';
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'

export default function AboutPage() {
	return (
		<Layout title="Keelan Matthews | About me">
			<Row className='pt-md-5 vh-100'>
				<Col xs={12} md={1}>
					<Row className='d-flex flex-md-column justify-content-between align-items-center ps-4 pt-3 p-md-0 h-100'>
						<Link to="/#about" className="text-dark w-50">
							<BiArrowBack size={37} />
						</Link>
						<Navigation activeSection={'about'} />
						<div className="d-none d-md-block"></div>
					</Row>
				</Col>
				<Col xs={10} className="scrollable">
					<AboutTransition />
					<div className="vh-100 d-flex flex-column justify-content-center">
						<h1 className="fw-bold heading-line mb-5">Introduction</h1>
						<Row className="d-flex align-items-center">
							<Col xs={12} md={6} className="d-flex justify-content-end">
								<div className="w-75">
									<small className="m-0">自分</small>
									<p className='fw-bold mb-4 fs-3'>Who I am</p>
									<p className="fs-5 border-start border-2 border-primary ps-3">
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
					</div>

					<div className="vh-100 d-flex flex-column justify-content-center">
						<h1 className="fw-bold heading-line mb-5">Skill Set</h1>
						<Skills />
					</div>
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
