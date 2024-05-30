import React from 'react'
import './buttonStyle.scss'
import { Link } from 'react-router-dom'

const ButtonProjects = ({ title, desc }) => {
	return (
		<Link to={'/react_portfolio/works'}>
			<button className='btn from-bottom'>
				{title} {desc}
			</button>
		</Link>
	)
}

// ? section ==> section__title

export default ButtonProjects
