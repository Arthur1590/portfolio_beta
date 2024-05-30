import React from 'react'
import loader from './img/logo-big.svg'
import './skeletonStyle.scss'

const Skeleton = () => {
	return (
		<>
			<div className='loader'>
				<img src={loader} alt='' />
				<h1>Loading...</h1>
			</div>
		</>
	)
}

export default Skeleton
