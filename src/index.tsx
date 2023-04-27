import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.scss'
import App from './App'
import { Provider } from 'react-redux'
import { AppProvider } from './context'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<AppProvider>
			<App />
		</AppProvider>
	</React.StrictMode>
)
