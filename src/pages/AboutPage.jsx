import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AboutTransition from '../components/About/AboutTransition'

export default function AboutPage() {
	return (
		<Row className='pt-md-5 vh-100'>
			<Col xs={12} md={1}>

			</Col>
			<Col xs={10}>
				<AboutTransition />
				<Row className="d-flex align-items-center">
					<Col xs={12} md={6}>
						<h4>Who I am</h4>
						<p>
							I am an aspiring Full Stack Developer from <span className="fw-bold">Johannesburg, South Africa</span>. Growing up, I have always had an insatiable desire for creativity and perfection. This, coupled up with my thorough enjoyment in coding, lead me down my current path.<br /><br />
							I have a thorough passion for coding, be it in programming or markup languages. The idea of being able to produce anything from scratch <span className="fw-bold">intrigues me</span>. This also includes designing vector graphics, 3D renders, animations and even music.<br /><br />
							I am able to pick up new skills very quickly, and always complete my deadlines early. In the event of time constraints, I <span className="fw-bold">thrive</span> under pressure.
						</p>
					</Col>
				</Row>
			</Col>
			<Col xs={2} md={1}>
				<Row className="d-flex flex-column justify-content-between align-items-center h-100">
					<div className="page-number">
						<p className='fs-1'>01</p>
					</div>
				</Row>
			</Col>
		</Row>
	)
}
