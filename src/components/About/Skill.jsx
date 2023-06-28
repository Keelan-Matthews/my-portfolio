import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'
import { skills } from '../../data/skill-list'

export default function Skill({ skill, basis = '20%' }) {
	return (
		skills.find(i => i.name === skill.trim()) ?
		<motion.div
			variants={skillVariants}
			className="border-black d-flex m-3 p-3 align-items-center"
			style={{ flexBasis: basis }}
		>
			{skills.find(i => i.name === skill.trim()).icon}
			<div className="ms-4">
				<p className="fw-bold m-0 p-0">{skills.find(i => i.name === skill.trim()).name}</p>
				<p className="fs-6 m-0 p-0">{skills.find(i => i.name === skill.trim()).level}</p>
			</div>
		</motion.div>
		: null
	)
}

const skillVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0 }
};