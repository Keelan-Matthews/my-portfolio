import React, { useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import { motion, useAnimation } from 'framer-motion/dist/framer-motion'
import TextReveal from '../animations/TextReveal'
import Skill from './Skill'

const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }

const headingLineVariants = {
    hidden: {width: 0, opacity: 0},
    visible: {width: 140, opacity: 1}
}

const groupVariants = {
	hidden: {},
	visible: {},
};

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
				...transition,
			}}
		>
			{skills.map((skill, index) => (
				<Skill key={index} skill={skill} basis={basis} />
			))}
		</motion.div>
	)
}

export default function Skills({ inView }) {
	const skills = [
		{
			name: 'React',
			level: 'Expert',
			top: true,
			type: 'Frontend'
		},
		{
			name: 'Bootstrap',
			level: 'Expert',
			top: true,
			type: 'Frontend'
		},
		{
			name: 'Javascript',
			level: 'Expert',
			top: true,
			type: 'Frontend'
		},
		{
			name: 'Vue',
			level: 'Intermediate',
			top: true,
			type: 'Frontend'
		},
		{
			name: 'PHP',
			level: 'Intermediate',
			top: true,
			type: 'Backend'
		},
		{
			name: 'SASS',
			level: 'Expert',
			top: true,
			type: 'Frontend'
		},
		{
			name: 'MySQL',
			level: 'Intermediate',
			top: true,
			type: 'Backend'
		},
		{
			name: 'Java',
			level: 'Intermediate',
			top: false,
			type: 'Programming'
		},
		{
			name: 'C++',
			level: 'Intermediate',
			top: false,
			type: 'Programming'
		},
		{
			name: 'HTML',
			level: 'Expert',
			top: false,
			type: 'Frontend'
		},
		{
			name: 'CSS',
			level: 'Expert',
			top: false,
			type: 'Frontend'
		},
		{
			name: 'Blender',
			level: 'Novice',
			top: false,
			type: 'Software'
		},
		{
			name: 'Figma',
			level: 'Intermediate',
			top: false,
			type: 'Software'
		},
		{
			name: 'VS Code',
			level: 'Expert',
			top: false,
			type: 'Software'
		},
		{
			name: 'Illustrator',
			level: 'Intermediate',
			top: false,
			type: 'Software'
		},
		{
			name: 'Photoshop',
			level: 'Novice',
			top: false,
			type: 'Software'
		},
		{
			name: 'Git',
			level: 'Intermediate',
			top: false,
			type: 'Software'
		},
		{
			name: 'GitHub',
			level: 'Intermediate',
			top: false,
			type: 'Software'
		},
		{
			name: 'MongoDB',
			level: 'Intermediate',
			top: false,
			type: 'Backend'
		},
		{
			name: 'NodeJS',
			level: 'Intermediate',
			top: false,
			type: 'Backend'
		},
		{
			name: 'Express',
			level: 'Intermediate',
			top: false,
			type: 'Backend'
		},
		{
			name: 'Python',
			level: 'Novice',
			top: false,
			type: 'Programming'
		},
		{
			name: 'NextJS',
			level: 'Expert',
			top: false,
			type: 'Frontend'
		}
	]

	return (
		<div className="vh-100 d-flex flex-column justify-content-center">
			<div className="d-flex align-items-center mb-5">
                <motion.div
                    variants={headingLineVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    transition={transition}
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
