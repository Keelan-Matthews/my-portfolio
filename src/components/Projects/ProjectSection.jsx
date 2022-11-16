import React, { useEffect, useState } from 'react'
import Project from './Project'

export default function ProjectSection({ activePage }) {
	const projects = [
		{
			japanese: '漫画',
			title: 'Motion VIO Comic',
			site: 'https://motion-comic.netlify.app/'
		},
		{
			japanese: '予告編',
			title: 'Interactive Trailer',
			site: 'https://k9-instinct.netlify.app/'
		},
		{
			japanese: 'ルダサ',
			title: 'RuDASA',
			site: 'https://rudasa.org.za/'
		},
		{
			japanese: 'ヨット',
			title: 'Yacht Portfolio',
			site: 'https://alexipapas.com/'
		}
	]

	const [currProject, setProject] = useState(projects[0])

	useEffect(() => {
		if (activePage !== 0)
			setProject(projects[activePage - 1].title)
	}, [activePage])

	return (
		<>
			{projects.map((project, index) => <Project key={index} {...project} visible={currProject == project.title} />)}
		</>
	)
}
