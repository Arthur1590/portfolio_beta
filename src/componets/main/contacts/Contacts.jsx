import React from 'react'
import SectionTitle from '../../sectionTitle/SectionTitle'
import email from './img/Email.svg'
import telegram from './img/telegram.svg'
import './contactsStyle.scss'

const Contacts = () => {
	return (
		<>
			<section className='contacts' id='contacts'>
				<SectionTitle symbol='#' title='Contacts' />
				<div className='container'>
					<article className='contacts__content'>
						<p>
							I’m interested in freelance opportunities. However, if you have
							other request or question, don’t hesitate to contact me
						</p>
					</article>
					<div className='contacts__socials'>
						<h5>Message me here: </h5>
						<figure className='contacts__socials-img'>
							<a href='#contacts'>
								<img src={email} alt='' />
								icloud.com
							</a>
							<a href='#contacts'>
								<img src={telegram} alt='' />
								Arthur_1590
							</a>
						</figure>
					</div>
				</div>
			</section>
		</>
	)
}

export default Contacts
