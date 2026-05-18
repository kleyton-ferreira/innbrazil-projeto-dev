import { FunctionComponent, useContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// PAGES
import HomePage from './page/home/home-components'
import LoginPage from './page/login/login-page'
import SignUpPage from './page/sign-up/sign-up-components'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from './config/firebase.config'
import { UserContext } from './components/context/user-context'
import { collection, getDocs, query, where } from 'firebase/firestore'

const App: FunctionComponent = () => {
  const [isInitialing, setIsInitialing] = useState(false)

  const { isAuthentication, logoutUser, loginUser } = useContext(UserContext)

  onAuthStateChanged(auth, async (user) => {
    const isSigninOut = isAuthentication && !user
    if (isSigninOut) {
      logoutUser()
      return setIsInitialing(false)
    }

    const isSignIn = !isAuthentication && user
    if (isSignIn) {
      const querySnapshot = await getDocs(
        query(collection(db, 'users'), where('id', '==', user.uid))
      )
      const userFromFirestore = querySnapshot.docs[0]?.data()
      return loginUser(userFromFirestore as any)
    }

    return setIsInitialing(false)
  })

  if (isInitialing) return null

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
