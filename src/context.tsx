import React, { useContext, useState, createContext } from 'react'

type User = {
	id: Number
	email: String
}
interface AppContextInterface {
	user: User
	setUser: (User: User) => void
}
const defaultUser: User = {
	id: 0,
	email: '',
}

const defaultAppContext: AppContextInterface = {
	user: defaultUser,
	setUser: (user) => console.warn(`no user provided: ${user}`),
}

const AppContext = createContext<AppContextInterface>(defaultAppContext)
const AppProvider = ({ children }: React.PropsWithChildren<unknown>) => {
	const [user, setUser] = useState<User>(defaultUser)

	return (
		<AppContext.Provider
			value={{
				user,
				setUser,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}

export const useGlobalContext = () => {
	return useContext(AppContext)
}
export { AppContext, AppProvider }
