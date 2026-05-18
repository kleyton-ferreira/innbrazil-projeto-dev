import { FunctionComponent, createContext, useState } from 'react'

// UTILITZ
import User from '../../types/user-types'

interface IUserContext {
  currentUser: User | null
  isAuthentication: boolean
  loginUser: (user: User) => void
  logoutUser: () => void
}

export const UserContext = createContext<IUserContext>({
  currentUser: null,
  isAuthentication: false,
  loginUser: () => {},
  logoutUser: () => {}
})

interface UserContextProviderProps {
  children: string | React.ReactNode
}

const UserContextProvider: FunctionComponent<UserContextProviderProps> = ({
  children
}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  const isAuthentication = currentUser !== null

  const loginUser = (user: User) => {
    setCurrentUser(user)
  }

  const logoutUser = () => {
    setCurrentUser(null)
  }

  return (
    <>
      <UserContext.Provider
        value={{ currentUser, isAuthentication, loginUser, logoutUser }}
      >
        {children}
      </UserContext.Provider>
    </>
  )
}

export default UserContextProvider
