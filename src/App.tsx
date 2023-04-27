import Navigation from './components/shared/Nav'
import SignUpForm from './components/SignUpForm'
import {
	createBrowserRouter,
	createRoutesFromElements,
	Outlet,
	Route,
	RouterProvider,
} from 'react-router-dom'
import AddPostForm from './components/AddPostForm'
import FeedPage from './components/FeedPage'

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<Root />}>
				<Route index element={<SignUpForm />} />
				<Route path='/sign-up' element={<SignUpForm />} />
				<Route path='/sign-in' element={<SignUpForm />} />
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
			<main className='p-4'>
				<Outlet />
			</main>
		</>
	)
}

export default App
