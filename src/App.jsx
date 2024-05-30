import { Routes, Route } from 'react-router-dom'
import React, { Suspense, useEffect, useState } from 'react'
import NavBar from './componets/navBar/NavBar'
import LazyMain from './componets/main/Main.jsx'
import Footer from './componets/footer/Footer'
import ScrollToTop from './helpers/scrollToTop/ScrollTop'
import Works from './pages/works/Works'
import ProjectIndex from './componets/main/projects/ProjectIndex'
import Skeleton from './helpers/skeleton/Skeleton'
import decor from './assets/img/bg-wave-C0eR2NWo.svg'
import './scss/main.scss'

function App() {
	const [showfallback, setShowfallback] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowfallback(true)
		}, 3)

		return () => clearTimeout(timer)
	}, [])

	return (
		<div className='App'>
			<img className='App__decor-top' src={decor} alt='wave decor img' />

			<ScrollToTop />

			{showfallback ? (
				<Suspense fallback={<Skeleton />}>
					<NavBar />
					<Routes>
						<Route path='/react_portfolio/' element={<LazyMain />} />
						<Route path='/react_portfolio/works' element={<Works />} />
						<Route
							path='/react_portfolio/projects/:id'
							element={<ProjectIndex />} // ! project details
						/>
					</Routes>
					<Footer />
				</Suspense>
			) : (
				<Skeleton />
			)}

			<img className='App__decor-bottom' src={decor} alt='wave decor img' />
		</div>
	)
}

export default App
