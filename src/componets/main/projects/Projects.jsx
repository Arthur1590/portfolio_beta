import React from 'react'
import LinkTo from '../../../ui/button/LinkTo'
import SectionTitle from '../../sectionTitle/SectionTitle'
import { projectsList } from './projectsData/projectsList'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './projectsStyle.scss'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const Projects = () => {
	let count = 5
	const limitedList = projectsList.slice(0, count)

	useGSAP(() => {
		gsap.from('.block', {
			scale: 0,
			duration: 1,
			scrollTrigger: {
				trigger: '.block',
				start: 'top 100%',
				end: 'bottom 50%',
				scrub: true,
			},
		})
	})

	return (
		<>
			<section className='projects ' id='projects'>
				<SectionTitle symbol='#' title='Projects' />
				<div className='container'>
					{limitedList.map((element, index) => (
						<div key={index} className='projects__card block'>
							<figure className='projects__card-desc'>
								<img
									src={element.img ? element.img : element.url}
									alt={element.title ? element.title : element.thumbnailUrl}
								/>
								<p>{element.tools}</p>
							</figure>
							<article className='projects__card-title'>
								<h5>{element.title}</h5>
								<p>{element.desc} </p>
								<Link to={`/react_portfolio/projects/${index}`}>
									<LinkTo title='~live~>' link={element.href} />
								</Link>
							</article>
						</div>
					))}
				</div>
			</section>
		</>
	)
}

export default Projects
