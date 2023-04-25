import React from 'react'
import Navigation from './components/shared/Nav'
import SignUpForm from './components/SignUpForm'

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<Navigation></Navigation>
			</header>
			<SignUpForm />
		</div>
	)
}

export default App
