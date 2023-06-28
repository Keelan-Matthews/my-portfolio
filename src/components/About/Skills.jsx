import React, { useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import { motion, useAnimation } from 'framer-motion/dist/framer-motion'
import TextReveal from '../animations/TextReveal'
import Skill from './Skill'
import { skills } from '../../data/skill-list'
import { groupVariants, skillsTransition, headingLineVariants } from '../animations/customVariants'

const SkillGroup = ({skills, basis = '20%', inView}) => {
	const ctrls = useAnimation();

	useEffect(() => {
		ctrls.start(inView ? "visible" : "hidden")
	}, [inView])

	return (
		<motion.div
			style={{ display: "contents" }}
			variants={groupVariants}
			initial="hidden"
			animate={ctrls}
			transition={{
				staggerChildren: 0.08,
				delayChildren: 0.4,
				...skillsTransition,
			}}
		>
			{skills.map((skill, index) => (
				<Skill key={index} skill={skill.name} basis={basis} />
			))}
		</motion.div>
	)
}

export default function Skills({ inView }) {
	return (
		<div className="vh-100 d-flex flex-column justify-content-center">
			<div className="d-flex align-items-center mb-5">
                <motion.div
                    variants={headingLineVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    transition={skillsTransition}
                    className="heading-line me-4 mb-3"
                ></motion.div>
                <div className="fw-bold">
                    <TextReveal text="Skill Set" visible={inView} delay={0.6} />
                </div>
            </div>
			<Row className="mb-5 pb-5">
				<Col xs={12} md={{ span: 10, offset: 1 }} className="d-flex justify-content-center flex-wrap mb-5">
					<SkillGroup skills={skills.filter((skill) => skill.top)} inView={inView} />
				</Col>
				<Col xs={12} md={{ span: 10, offset: 1 }} className="px-3 mt-5">
					<Accordion>
						{[...new Set(skills.map((skill) => skill.type))].map((type, index) => (
							<Accordion.Item eventKey={index} key={index}>
								<Accordion.Header>{type}</Accordion.Header>
								<Accordion.Body className="d-flex flex-wrap">
									<SkillGroup 
										skills={skills.filter((skill) => skill.type === type).sort((a,b) => a.level.localeCompare(b.level))} 
										inView={inView} 
										basis="15%"
									/>
								</Accordion.Body>
							</Accordion.Item>
						))}
					</Accordion>
				</Col>
			</Row>
		</div>
	)
}
