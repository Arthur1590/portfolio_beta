import React from 'react'
import './buttonStyle.scss'

const Button = ({ title, desc }) => {
	return (
		<button className='btn from-bottom'>
			{title} {desc}
		</button>
	)
}

export default Button
