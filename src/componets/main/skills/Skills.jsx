import React from 'react'
import skillsList from './skillsData/skillsList'
import SectionTitle from '../../sectionTitle/SectionTitle'
import dots from './img/dots.svg'
import logo from './img/logo-big.svg'

import './skillsStyle.scss'

const Skills = () => {
	return (
		<>
			<section className='skills'>
				<SectionTitle symbol='#' title='Skills' />
				<div className='container'>
					<figure className='skills__decor'>
						<img src={dots} alt='dots decor' />
						<img src={dots} alt='dots decor' />
						<img src={logo} alt='dots decor' />
						<img src={dots} alt='dots decor' />
					</figure>
					<div className='skills__wrapper'>
						{skillsList.map(element => (
							<div key={element.title} className='skills__card'>
								<article>
									<h5>{element.title}</h5>
								</article>
								<p>{element.tools}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}

export default Skills
