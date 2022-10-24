import React from 'react'
import Project from './Project'

export default function ProjectSection() {
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

	return (
		<>
			{projects.map((project, index) => <Project key={index} {...project} />)}
		</>
	)
}
