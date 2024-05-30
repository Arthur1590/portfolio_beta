import React from 'react'
import logo from './img/mini-Logo.svg'
import github from './img/github.svg'
import telegram from './img/telegram.svg'
import discord from './img/discord.svg'
import './footerStyle.scss'

const Footer = () => {
	return (
		<footer className='footer'>
			<section className='info'>
				<div className='container'>
					<article className='info__content'>
						<p>
							<img src={logo} alt='header logo' />
							Arthur
							<span>azura1590@icloud.com</span>
						</p>
						<p>Web designer and front-end developer</p>
					</article>
					<figure className='info__socials'>
						<h5>Media:</h5>
						<div className='info__socials-icons'>
							<img src={github} alt='github' />
							<img src={telegram} alt='telegram' />
							<img src={discord} alt='discord' />
							<div className='tumbler'></div>
						</div>
					</figure>
				</div>
			</section>
			<section className='copyrights'>
				<div className='container'>
					<h5>
						© Copyright 2022-2024. Made by <span>Elias. </span>Coded by
						<span> Arthur.</span>
					</h5>
				</div>
			</section>
		</footer>
	)
}

export default Footer
