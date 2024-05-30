import React from 'react'
import Intro from './intro/Intro'
import Projects from './projects/Projects'
import About from './about/About'
import Skills from './skills/Skills'
import Contacts from './contacts/Contacts'

const Main = () => {
	return (
		<main className='main'>
			<Intro />

			<Projects />

			<About />

			<Skills />

			<Contacts />
		</main>
	)
}

export default Main
