import React, { useEffect, useState } from 'react'
import Section from '../Section'

export default function ProjectSection({ activePage }) {
	const projects = [
		{
			japanese: '漫画',
			title: 'Motion VIO Comic',
			site: 'https://motion-comic.netlify.app/',
			// desc: 'A motion comic based off of a comic I did in first year, inspired by anime and vaporwave.'
		},
		{
			japanese: '予告編',
			title: 'Interactive Trailer',
			site: 'https://k9-instinct.netlify.app/',
			// desc: 'An interactive trailer based off of the comic I did in first year. Its purpose is to entice the user to read it.'
		},
		{
			japanese: 'ルダサ',
			title: 'RuDASA',
			site: 'https://rudasa.org.za/',
			// desc: 'A website for a non-profit organisation for rural doctors that a team and I redeveloped from scratch.'
		},
		{
			japanese: 'ヨット',
			title: 'Yacht Portfolio',
			site: 'https://alexipapas.com/',
			// desc: 'A website for a deckhand used to display their skills and experience in the yachting industry.'
		}
	]

	const [currProject, setProject] = useState(projects[0])

	useEffect(() => {
		if (activePage !== 0)
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
