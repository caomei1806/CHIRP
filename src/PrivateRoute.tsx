import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useGlobalContext } from './context'

interface IPrivateRoute {
	children: JSX.Element
}
const PrivateRoute = ({ children }: IPrivateRoute) => {
	const { user } = useGlobalContext()
	if (!user.id) {
		return <Navigate to='/' replace />
	}

	return children
}
export default PrivateRoute
