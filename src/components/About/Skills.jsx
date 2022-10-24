import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import { SiReact, SiBootstrap, SiJavascript, SiVuedotjs, SiPhp, SiSass } from 'react-icons/si'
import { DiMysql } from 'react-icons/di'

const SkillGroup = (skills) => {
	return (
		<>
			{skills.map((skill, index) => (
				<div className="border-black d-flex m-3 p-3 align-items-center" key={index} style={{ flexBasis: '20%' }}>
					{skill.icon}
					<div className="ms-4">
						<p className="fw-bold m-0 p-0">{skill.name}</p>
						<p className="fs-6 m-0 p-0">{skill.level}</p>
					</div>
				</div>
			))}
		</>
	)
}

export default function Skills() {
	const skills = [
		{
			name: 'React',
			level: 'Expert',
			icon: <SiReact size={37} />,
			top: true,
			type: 'frontend'
		},
		{
			name: 'Bootstrap',
			level: 'Expert',
			icon: <SiBootstrap size={37} />,
			top: true,
			type: 'frontend'
		},
		{
			name: 'Javascript',
			level: 'Expert',
			icon: <SiJavascript size={37} />,
			top: true,
			type: 'frontend'
		},
		{
			name: 'Vue',
			level: 'Intermediate',
			icon: <SiVuedotjs size={37} />,
			top: true,
			type: 'frontend'
		},
		{
			name: 'PHP',
			level: 'Intermediate',
			icon: <SiPhp size={37} />,
			top: true,
			type: 'backend'
		},
		{
			name: 'SASS',
			level: 'Expert',
			icon: <SiSass size={37} />,
			top: true,
			type: 'frontend'
		},
		{
			name: 'MySQL',
			level: 'Intermediate',
			icon: <DiMysql size={37} />,
			top: true,
			type: 'backend'
		}
	]

	return (
		<Row className="mb-5 pb-5">
			<Col xs={12} md={{ span: 11, offset: 1 }} className="d-flex justify-content-center flex-wrap mb-5">
				{SkillGroup(skills.filter((skill) => skill.top))}
			</Col>
			<Col xs={12} md={{ span: 11, offset: 1 }} className="px-3 mt-5">
				<Accordion>
					<Accordion.Item eventKey="0">
						<Accordion.Header>Frontend</Accordion.Header>
						<Accordion.Body>
							<div className="d-flex">
								{SkillGroup(skills.filter((skill) => skill.type === 'frontend'))}
							</div>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="1">
						<Accordion.Header>Backend</Accordion.Header>
						<Accordion.Body>
							<div className="d-flex">
								{SkillGroup(skills.filter((skill) => skill.type === 'backend'))}
							</div>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="2">
						<Accordion.Header>Software</Accordion.Header>
						<Accordion.Body>
							<div className="d-flex">
								{SkillGroup(skills.filter((skill) => skill.type === 'software'))}
							</div>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="3">
						<Accordion.Header>Programming</Accordion.Header>
						<Accordion.Body>
							<div className="d-flex">
								{SkillGroup(skills.filter((skill) => skill.type === 'programming'))}
							</div>
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</Col>
		</Row>
	)
}
