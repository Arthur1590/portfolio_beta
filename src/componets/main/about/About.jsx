import React from 'react'
import myPhoto from './img/My_Image.png'
import dots from './img/dots.svg'
import Button from '../../../ui/button/Button'
import SectionTitle from '../../sectionTitle/SectionTitle'

import './aboutStyle.scss'

const About = () => {
	return (
		<>
			<section className='about blo' id='about'>
				<SectionTitle symbol='#' title='About-me' />
				<div className='container'>
					<article className='about__content'>
						<h5>Hello, I am Arthur!</h5>
						<p>
							I’m a self-taught front-end developer based in
							<strong> Ferghana</strong>, <strong>Uzbekistan</strong>. I can
							develop responsive websites from scratch and raise them into
							modern user-friendly web experiences.
						</p>
						<p>
							Transforming my creativity and knowledge into a websites has been
							my passion for over a year. I have been helping various clients to
							establish their presence online. I always strive to learn about
							the newest technologies and frameworks.
						</p>
						<Button title='Learn More ~~>' />
					</article>
					<figure className='about__bio'>
						<img src={myPhoto} alt='my face' />
						<img src={dots} alt='my face' />
						<img src={dots} alt='my face' />
					</figure>
				</div>
			</section>
		</>
	)
}

export default About
