import React, { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './scss/main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<StrictMode>
			<App />
		</StrictMode>
	</BrowserRouter>
)
