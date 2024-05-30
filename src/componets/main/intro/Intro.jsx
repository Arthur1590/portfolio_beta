import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Button from '../../../ui/button/Button'
import MyPhoto from './img/MyPhoto.png'
import dots from './img/dots.svg'
import quite from './img/quites.svg'
import './introStyle.scss'

gsap.registerPlugin(useGSAP)

const Intro = () => {
	const container = useRef()

	useGSAP(
		() => {
			gsap.from('.from-right', {
				x: 350,
				duration: 1.5,
				delay: 0.3,
				opacity: 0,
			})
			gsap.from('.from-left', { x: -350, duration: 1.5, opacity: 0 })
		},
		{ scope: container }
	)

	return (
		<>
			<section className='intro' id='intro'>
				<div className='container' ref={container}>
					<article className='intro__content from-left '>
						<h5>
							Hi, I am a <span>web designer</span> and
							<span> front-end developer</span>
						</h5>
						<p className='from-left'>
							I craft responsive websites where technologies meet creativity
						</p>
						<Button title='Contact me' />
					</article>
					<figure className='intro__bio from-right'>
						<img src={MyPhoto} alt='picture' />
						<img className='intro__decor-left' src={dots} alt='dots' />
						<img className='intro__decor-right' src={dots} alt='dots' />
						<article className='intro__status'>
							<div className='intro__status-box'></div>
							<h5>
								Currently working on <span>Portfolio</span>
							</h5>
						</article>
					</figure>
				</div>
			</section>
			<section className='citate'>
				<div className='container'>
					<div className='citate__wrapper'>
						<div className='citate__holder'>
							<img className='citate__quite' src={quite} alt='quites' />
							<p>With great power comes great electricity bill</p>
						</div>
						<div className='citate__holder'>
							<p>- Dr. Who</p>
							<img className='citate__quite' src={quite} alt='quites' />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Intro
