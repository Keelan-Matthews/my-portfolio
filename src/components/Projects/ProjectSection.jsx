import React, { useEffect, useState } from 'react'
import Section from '../Section'
import { projects } from '../../data/project-list'

export default function ProjectSection({ activePage }) {
	const [currProject, setProject] = useState(projects[0])

	useEffect(() => {
		if (activePage !== 0 && activePage !== projects.length + 1)
			setProject(projects[activePage - 1].title)
		else
			setProject('null')
	}, [activePage])

	return (
		<>
			{projects.map((project, index) =>
				<div className="section" key={index}>
					<Section
						{...project}
						visible={currProject === project.title}
						cta="view site"
					/>
				</div>
			)}
		</>
	)
}
