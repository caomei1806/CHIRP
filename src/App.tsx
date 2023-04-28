import Navigation from './components/shared/Nav'
import SignForm from './components/SignForm'
import {
	createBrowserRouter,
	createRoutesFromElements,
	Outlet,
	Route,
	RouterProvider,
	Navigate,
} from 'react-router-dom'
import AddPostForm from './components/AddPostForm'
import FeedPage from './components/FeedPage'
import { SignAction } from './components/enums'
import { useGlobalContext } from './context'
import PrivateRoute from './PrivateRoute'

function App() {
	const { user } = useGlobalContext()
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<Root />}>
				<Route index element={<SignForm type={SignAction.signIn} />} />
				<Route
					path='/sign-up'
					element={
						<PrivateRoute>
							<SignForm type={SignAction.signUp} />
						</PrivateRoute>
					}
				/>
				<Route
					path='/sign-in'
					element={
						<PrivateRoute>
							<SignForm type={SignAction.signIn} />
						</PrivateRoute>
					}
				/>
				<Route
					path='/post-add'
					element={
						<PrivateRoute>
							<AddPostForm />
						</PrivateRoute>
					}
				/>
				{/* <Route path='/post-add' element={<AddPostForm />} /> */}
				<Route
					path='/posts'
					element={
						<PrivateRoute>
							<FeedPage />
						</PrivateRoute>
					}
				/>
				<Route path='/posts' element={<FeedPage />} />
				<Route path='*' element={<Navigate to='/' replace />} />
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
