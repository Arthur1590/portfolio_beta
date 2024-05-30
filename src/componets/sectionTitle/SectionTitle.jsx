import React from 'react'
import ButtonProjects from '../../ui/button/ButtonProjects'
import './sectionStyle.scss'

const SectionTitle = ({ title, symbol }) => {
	return (
		<>
			<article className='section__title'>
				<h1>
					<span>{symbol} </span>
					{title}
				</h1>
				<ButtonProjects title='View All ~~>' />
			</article>
		</>
	)
}

export default SectionTitle
