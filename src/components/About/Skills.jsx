import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import { SiReact, SiBootstrap, SiJavascript, SiVuedotjs, SiPhp, SiSass, SiJava, SiCplusplus, SiHtml5, SiCss3, SiBlender, SiFigma, SiVisualstudiocode, SiMongodb, SiNodedotjs, SiExpress, SiNextdotjs, SiPython } from 'react-icons/si'
import { DiMysql, DiIllustrator, DiPhotoshop, DiGit, DiGithubBadge } from 'react-icons/di'
import { motion } from 'framer-motion/dist/framer-motion'
import TextReveal from '../animations/TextReveal'

const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }

const headingLineVariants = {
    hidden: {width: 0, opacity: 0},
    visible: {width: 140, opacity: 1}
}

const SkillGroup = (skills, basis = '20%') => {
	return (
		<>
			{skills.map((skill, index) => (
				<div className="border-black d-flex m-3 p-3 align-items-center" key={index} style={{ flexBasis: basis }}>
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

export default function Skills({ inView }) {
	const skills = [
		{
			name: 'React',
			level: 'Expert',
			icon: <SiReact size={37} />,
			top: true,
			type: 'Frontend'
		},
		{
			name: 'Bootstrap',
			level: 'Expert',
			icon: <SiBootstrap size={37} />,
			top: true,
			type: 'Frontend'
		},
		{
			name: 'Javascript',
			level: 'Expert',
			icon: <SiJavascript size={37} />,
			top: true,
			type: 'Frontend'
		},
		{
			name: 'Vue',
			level: 'Intermediate',
			icon: <SiVuedotjs size={37} />,
			top: true,
			type: 'Frontend'
		},
		{
			name: 'PHP',
			level: 'Intermediate',
			icon: <SiPhp size={37} />,
			top: true,
			type: 'Backend'
		},
		{
			name: 'SASS',
			level: 'Expert',
			icon: <SiSass size={37} />,
			top: true,
			type: 'Frontend'
		},
		{
			name: 'MySQL',
			level: 'Intermediate',
			icon: <DiMysql size={37} />,
			top: true,
			type: 'Backend'
		},
		{
			name: 'Java',
			level: 'Intermediate',
			icon: <SiJava size={37} />,
			top: false,
			type: 'Programming'
		},
		{
			name: 'C++',
			level: 'Intermediate',
			icon: <SiCplusplus size={37} />,
			top: false,
			type: 'Programming'
		},
		{
			name: 'HTML',
			level: 'Expert',
			icon: <SiHtml5 size={37} />,
			top: false,
			type: 'Frontend'
		},
		{
			name: 'CSS',
			level: 'Expert',
			icon: <SiCss3 size={37} />,
			top: false,
			type: 'Frontend'
		},
		{
			name: 'Blender',
			level: 'Novice',
			icon: <SiBlender size={37} />,
			top: false,
			type: 'Software'
		},
		{
			name: 'Figma',
			level: 'Intermediate',
			icon: <SiFigma size={37} />,
			top: false,
			type: 'Software'
		},
		{
			name: 'VS Code',
			level: 'Expert',
			icon: <SiVisualstudiocode size={37} />,
			top: false,
			type: 'Software'
		},
		{
			name: 'Illustrator',
			level: 'Intermediate',
			icon: <DiIllustrator size={37} />,
			top: false,
			type: 'Software'
		},
		{
			name: 'Photoshop',
			level: 'Novice',
			icon: <DiPhotoshop size={37} />,
			top: false,
			type: 'Software'
		},
		{
			name: 'Git',
			level: 'Intermediate',
			icon: <DiGit size={37} />,
			top: false,
			type: 'Software'
		},
		{
			name: 'GitHub',
			level: 'Intermediate',
			icon: <DiGithubBadge size={37} />,
			top: false,
			type: 'Software'
		},
		{
			name: 'MongoDB',
			level: 'Intermediate',
			icon: <SiMongodb size={37} />,
			top: false,
			type: 'Backend'
		},
		{
			name: 'NodeJS',
			level: 'Intermediate',
			icon: <SiNodedotjs size={37} />,
			top: false,
			type: 'Backend'
		},
		{
			name: 'Express',
			level: 'Intermediate',
			icon: <SiExpress size={37} />,
			top: false,
			type: 'Backend'
		},
		{
			name: 'Python',
			level: 'Novice',
			icon: <SiPython size={37} />,
			top: false,
			type: 'Programming'
		},
		{
			name: 'NextJS',
			level: 'Expert',
			icon: <SiNextdotjs size={37} />,
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
                    <TextReveal text="Introduction" visible={inView} delay={0.6} />
                </div>
            </div>
			<Row className="mb-5 pb-5">
				<Col xs={12} md={{ span: 10, offset: 1 }} className="d-flex justify-content-center flex-wrap mb-5">
					{SkillGroup(skills.filter((skill) => skill.top))}
				</Col>
				<Col xs={12} md={{ span: 10, offset: 1 }} className="px-3 mt-5">
					<Accordion>
						{[...new Set(skills.map((skill) => skill.type))].map((type, index) => (
							<Accordion.Item eventKey={index} key={index}>
								<Accordion.Header>{type}</Accordion.Header>
								<Accordion.Body className="d-flex flex-wrap">
									{
										SkillGroup(
											skills.filter((skill) => skill.type === type)
												  .sort((a,b) => a.level.localeCompare(b.level))
											, '15%'
										)
									}
								</Accordion.Body>
							</Accordion.Item>
						))}
					</Accordion>
				</Col>
			</Row>
		</div>
	)
}
