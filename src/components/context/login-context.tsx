import { FunctionComponent, createContext, useEffect, useState } from 'react'
import { FieldErrors, UseFormRegister, useForm } from 'react-hook-form'
import { auth, db, provider } from '../../config/firebase.config'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import User from '../../types/user-types'
import {
  AuthError,
  AuthErrorCodes,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup
} from 'firebase/auth'

export interface LoginPageForm {
  email: string
  password: string
}

interface LOginContext {
  currentUser: User | null
  isAuthentication: boolean
  isLoadingAuth: boolean
  isLoading: boolean
  handleSignInWithGooglePress: () => void
  loginUser: (user: User) => void
  logoutUser: () => void
  handleSubmitPress: (data: LoginPageForm) => void

  register: UseFormRegister<LoginPageForm>
  errors: FieldErrors<LoginPageForm>
  handleSubmit: ReturnType<typeof useForm<LoginPageForm>>['handleSubmit']
}

export const LoginContext = createContext<LOginContext>({
  currentUser: null,
  isAuthentication: false,
  isLoadingAuth: true,
  isLoading: false,
  loginUser: () => {},
  logoutUser: () => {},
  handleSubmitPress: () => {},
  handleSignInWithGooglePress: () => {},

  // USEFORM
  register: {} as UseFormRegister<LoginPageForm>,
  errors: {},
  handleSubmit: {} as ReturnType<typeof useForm<LoginPageForm>>['handleSubmit']
})

interface LoginContextProviderProps {
  children: string | React.ReactNode
}

const LoginContextProvider: FunctionComponent<LoginContextProviderProps> = ({
  children
}) => {
  const {
    setError,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginPageForm>()

  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [isLoading, setIsloading] = useState(false)

  const [isLoadingAuth, setIsLoadingAuth] = useState(true)

  const isAuthentication = currentUser !== null

  const loginUser = (user: User) => setCurrentUser(user)
  const logoutUser = () => setCurrentUser(null)

  // ESSE USE EFFECT ME DIRECIONA PARA PAGINA INICIAL!
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (User) => {
      if (User) {
        loginUser({
          id: User.uid,
          email: User.email!,
          firstName: User.displayName?.split(' ')[0] || '',
          lastName: User.displayName?.split(' ')[1] || '',
          providers:
            User.providerData[0]?.providerId === 'google.com'
              ? 'google'
              : 'firebase'
        })
      }
      setIsLoadingAuth(false)
    })

    return () => unsubscribe()
  }, [])

  //   DIRECIONA PARA O WATS!
  const sendWhatsAppConfirmation = (email: string) => {
    const phone = '5582988322654'
    const message = encodeURIComponent(
      `Olá! Login realizado com sucesso.\nConfirmação de agendamento para o e-mail: ${email}`
    )
    // window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
  }

  // FUNÇAO LOGIN COM A CONTA EMAIL AN SENHA!
  const handleSubmitPress = async (data: LoginPageForm) => {
    try {
      setIsloading(true)
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )

      console.log({ userCredential })
      sendWhatsAppConfirmation(data.email)
    } catch (error) {
      const _error = error as AuthError

      if (_error.code === AuthErrorCodes.INVALID_EMAIL) {
        return setError('email', { type: 'invalid-email' })
      }

      const isInvalidCredential =
        _error.code === AuthErrorCodes.INVALID_IDP_RESPONSE ||
        _error.code === AuthErrorCodes.INVALID_PASSWORD ||
        _error.code === 'auth/invalid-login-credentials'

      if (isInvalidCredential) {
        return setError('password', { type: 'invalid-credentials' })
      }
    } finally {
      setIsloading(false)
    }
  }

  // FUNÇAO LOGIN COM GOOGLE!
  const handleSignInWithGooglePress = async () => {
    try {
      setIsloading(true)
      const userCredentials = await signInWithPopup(auth, provider)
      console.log({ userCredentials })

      const querySnapshot = await getDocs(
        query(
          collection(db, 'users'),
          where('id', '==', userCredentials.user.uid)
        )
      )

      const user = querySnapshot.docs[0]?.data()

      if (!user) {
        const firstName = userCredentials.user.displayName?.split(' ')[0]
        const lastName = userCredentials.user.displayName?.split(' ')[1]

        await addDoc(collection(db, 'users'), {
          id: userCredentials.user.uid,
          email: userCredentials.user.email,
          firstName,
          lastName,
          providers: 'google'
        })
      }

      // passar só o email, não o objeto inteiro
      sendWhatsAppConfirmation(userCredentials.user.email!)
    } catch (error) {
      console.error({ error })
    } finally {
      setIsloading(false)
    }
  }

  return (
    <LoginContext.Provider
      value={{
        isAuthentication,
        currentUser,
        isLoading,
        isLoadingAuth,
        errors,
        loginUser,
        handleSubmitPress,
        handleSubmit,
        register,
        handleSignInWithGooglePress,
        logoutUser
      }}
    >
      {children}
    </LoginContext.Provider>
  )
}

export default LoginContextProvider
