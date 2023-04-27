import Navigation from './components/shared/Nav'
import SignForm from './components/SignForm'
import {
	createBrowserRouter,
	createRoutesFromElements,
	Outlet,
	Route,
	RouterProvider,
} from 'react-router-dom'
import AddPostForm from './components/AddPostForm'
import FeedPage from './components/FeedPage'
import { SignAction } from './components/enums'

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<Root />}>
				<Route index element={<SignForm type={SignAction.signIn} />} />
				<Route
					path='/sign-up'
					element={<SignForm type={SignAction.signUp} />}
				/>
				<Route
					path='/sign-in'
					element={<SignForm type={SignAction.signIn} />}
				/>
				<Route path='/post-add' element={<AddPostForm />} />
				<Route path='/posts' element={<FeedPage />} />
			</Route>
		)
	)
	return (
		<div className='App'>
			<RouterProvider router={router} />
		</div>
	)
}

const Root = () => {
	return (
		<>
			<header className='App-header'>
				<Navigation />
			</header>
			<main className='p-4 d-flex flex-column justify-content-center'>
				<Outlet />
			</main>
		</>
	)
}

export default App
