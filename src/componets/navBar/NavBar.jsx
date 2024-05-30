import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from './img/mini-Logo.svg'
import clsx from 'clsx'
import sound from '../../assets/sound/click.mp3'
import './navBar.scss'

const NavBar = () => {
	const [txt, setTxt] = useState('Portfolio')
	const [isTrue, setTrue] = useState(true)

	const classChangeMenu = clsx('menu', { active: !isTrue })
	const classChangeList = clsx('header__nav-list', { active: !isTrue })

	useEffect(() => {
		const logoRound = () => {
			const phrases = [
				'HTML',
				'SCSS',
				'CSS',
				'JS',
				'JSx',
				'REACT',
				'NEXT JS',
				'WEB',
				'DEVELOPING',
			]
			const index = Math.floor(Math.random() * phrases.length)
			const generated = phrases[index]
			const newPhrases = [...phrases]
			newPhrases.splice(index, 1)
			setTxt(generated)
		}

		window.addEventListener('pointermove', logoRound)

		return () => {
			window.removeEventListener('pointermove', logoRound)
		}
	}, ['Main'])

	useEffect(() => {
		const SoundHandler = () => {
			const soundclick = new Audio(sound)
			soundclick.play()
		}
		window.addEventListener('click', SoundHandler)
	}, [])

	return (
		<header className='header'>
			<div className=' fluid__container'>
				<figure className='header__logo'>
					<p>
						<img src={logo} alt='header logo' />
						{txt}
					</p>
				</figure>
				<nav className='header__nav'>
					<ul className={classChangeList}>
						<li className='header__nav-item'>
							<NavLink to={'/react_portfolio/'} className='header__nav-link'>
								home
							</NavLink>
						</li>
						<li className='header__nav-item'>
							<a href='#projects' className='header__nav-link'>
								porojects
							</a>
						</li>
						<li className='header__nav-item'>
							<a href='#about' className='header__nav-link'>
								about
							</a>
						</li>
						<li className='header__nav-item'>
							<a href='#contacts' className='header__nav-link'>
								contacts
							</a>
						</li>
					</ul>
					<div className={classChangeMenu} onClick={() => setTrue(!isTrue)}>
						<span></span>
					</div>
				</nav>
			</div>
		</header>
	)
}

export default NavBar
