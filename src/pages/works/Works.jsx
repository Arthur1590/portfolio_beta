import { Link } from 'react-router-dom'
import React from 'react'
import LinkTo from '../../ui/button/LinkTo'
import SectionTitle from '../../componets/sectionTitle/SectionTitle'
import { projectsList } from '../../componets/main/projects/projectsData/projectsList'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './workStyle.scss'

gsap.registerPlugin(ScrollTrigger)

const Works = () => {
	let count = 12
	const limitedList = projectsList.slice(0, count)

	useGSAP(() => {
		const blocks = document.querySelectorAll('.projects__card')
		blocks.forEach(block => {
			// Создаем анимацию для текущего блока
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: block, // Устанавливаем триггер на текущий блок
					start: 'top 50%', // Начало анимации, когда нижняя граница блока достигнет нижней границы окна
				},
			})
			tl.from(block, {
				opacity: 0,
				y: 100,
				duration: 0.5,
			})
		})
	})

	return (
		<div className='main'>
			<section className='works'>
				<SectionTitle symbol='/' title='Completed Apps' />
				<div className='container'>
					{limitedList.map((projectsList, index) => (
						<div key={projectsList.title} className='projects__card'>
							<figure className='projects__card-desc'>
								<img
									src={
										projectsList.img
											? projectsList.img
											: projectsList.thumbnailUrl
									}
									alt={projectsList.title}
								/>
								<p>{projectsList.tools}</p>
							</figure>
							<article className='projects__card-title'>
								<h5>{projectsList.title}</h5>
								<p>{projectsList.desc} </p>
								<Link to={`/react_portfolio/projects/${index}`}>
									<LinkTo title='~Learn More~>' />
								</Link>
							</article>
						</div>
					))}
				</div>
			</section>
		</div>
	)
}

export default Works
