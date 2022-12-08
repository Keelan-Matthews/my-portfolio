import React from 'react'
import { SiReact, SiBootstrap, SiJavascript, SiVuedotjs, SiPhp, SiSass, SiJava, SiCplusplus, SiHtml5, SiCss3, SiBlender, SiFigma, SiVisualstudiocode, SiMongodb, SiNodedotjs, SiExpress, SiNextdotjs, SiPython } from 'react-icons/si'
import { DiMysql, DiIllustrator, DiPhotoshop, DiGit, DiGithubBadge } from 'react-icons/di'
import { motion } from 'framer-motion/dist/framer-motion'

const icons = [
	{
		name: 'React',
		level: 'Expert',
		icon: <SiReact size={37} />
	},
	{
		name: 'Bootstrap',
		level: 'Expert',
		icon: <SiBootstrap size={37} />
	},
	{
		name: 'Javascript',
		level: 'Expert',
		icon: <SiJavascript size={37} />
	},
	{
		name: 'Vue',
		level: 'Intermediate',
		icon: <SiVuedotjs size={37} />
	},
	{
		name: 'PHP',
		level: 'Intermediate',
		icon: <SiPhp size={37} />
	},
	{
		name: 'SASS',
		level: 'Expert',
		icon: <SiSass size={37} />
	},
	{
		name: 'MySQL',
		level: 'Intermediate',
		icon: <DiMysql size={37} />
	},
	{
		name: 'Java',
		level: 'Intermediate',
		icon: <SiJava size={37} />
	},
	{
		name: 'C++',
		level: 'Intermediate',
		icon: <SiCplusplus size={37} />
	},
	{
		name: 'HTML',
		level: 'Expert',
		icon: <SiHtml5 size={37} />
	},
	{
		name: 'CSS',
		level: 'Expert',
		icon: <SiCss3 size={37} />
	},
	{
		name: 'Blender',
		level: 'Novice',
		icon: <SiBlender size={37} />
	},
	{
		name: 'Figma',
		level: 'Intermediate',
		icon: <SiFigma size={37} />
	},
	{
		name: 'VS Code',
		level: 'Expert',
		icon: <SiVisualstudiocode size={37} />
	},
	{
		name: 'Illustrator',
		level: 'Intermediate',
		icon: <DiIllustrator size={37} />
	},
	{
		name: 'Photoshop',
		level: 'Novice',
		icon: <DiPhotoshop size={37} />
	},
	{
		name: 'Git',
		level: 'Intermediate',
		icon: <DiGit size={37} />
	},
	{
		name: 'GitHub',
		level: 'Intermediate',
		icon: <DiGithubBadge size={37} />
	},
	{
		name: 'MongoDB',
		level: 'Intermediate',
		icon: <SiMongodb size={37} />
	},
	{
		name: 'NodeJS',
		level: 'Intermediate',
		icon: <SiNodedotjs size={37} />
	},
	{
		name: 'Express',
		level: 'Intermediate',
		icon: <SiExpress size={37} />
	},
	{
		name: 'Python',
		level: 'Novice',
		icon: <SiPython size={37} />
	},
	{
		name: 'NextJS',
		level: 'Expert',
		icon: <SiNextdotjs size={37} />
	}
]

export default function Skill({ skill, basis = '20%' }) {

	return (
		icons.find(i => i.name === skill) ?
		<motion.div
			variants={skillVariants}
			className="border-black d-flex m-3 p-3 align-items-center"
			style={{ flexBasis: basis }}
		>
			{icons.find(i => i.name === skill).icon}
			<div className="ms-4">
				<p className="fw-bold m-0 p-0">{icons.find(i => i.name === skill).name}</p>
				<p className="fs-6 m-0 p-0">{icons.find(i => i.name === skill).level}</p>
			</div>
		</motion.div>
		: null
	)
}

const skillVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0 }
};