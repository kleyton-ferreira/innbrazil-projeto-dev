import { FunctionComponent, createContext, useState } from 'react'

// UTILITZ
import User from '../../types/user-types'
import { auth, db } from '../../config/firebase.config'
import { addDoc, collection } from 'firebase/firestore'
import {
  AuthError,
  AuthErrorCodes,
  createUserWithEmailAndPassword
} from 'firebase/auth'
import { useForm, UseFormRegister, FieldErrors } from 'react-hook-form'

export interface SignUpFormData {
  firstName: string
  lastName: string
  email: string
  password: string
  passwordConfirmation: string
}

interface IUserContext {
  currentUser: User | null
  isAuthentication: boolean
  isLoading: boolean
  loginUser: (user: User) => void
  logoutUser: () => void
  handleSubmitPress: (data: SignUpFormData) => void

  register: UseFormRegister<SignUpFormData>
  errors: FieldErrors<SignUpFormData>
  handleSubmit: ReturnType<typeof useForm<SignUpFormData>>['handleSubmit']
  watch: ReturnType<typeof useForm<SignUpFormData>>['watch']
}

export const UserContext = createContext<IUserContext>({
  currentUser: null,
  isAuthentication: false,
  isLoading: false,
  loginUser: () => {},
  logoutUser: () => {},
  handleSubmitPress: () => {},

  // USEFORM
  register: {} as UseFormRegister<SignUpFormData>,
  errors: {},
  handleSubmit: {} as ReturnType<
    typeof useForm<SignUpFormData>
  >['handleSubmit'],
  watch: {} as ReturnType<typeof useForm<SignUpFormData>>['watch']
})

interface UserContextProviderProps {
  children: string | React.ReactNode
}

const UserContextProvider: FunctionComponent<UserContextProviderProps> = ({
  children
}) => {
  const {
    setError,
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<SignUpFormData>()

  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [isLoading, setIsloading] = useState(false)

  const isAuthentication = currentUser !== null

  const loginUser = (user: User) => setCurrentUser(user)
  const logoutUser = () => setCurrentUser(null)

  const WHATSAPP_NUMBER = '5582987940126'

  // FUNÇAO DE CRIAR CONTA!
  const handleSubmitPress = async (data: SignUpFormData) => {
    try {
      setIsloading(true)
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )

      await addDoc(collection(db, 'users'), {
        id: userCredentials.user.uid,
        email: userCredentials.user.email,
        firstName: data.firstName,
        lastName: data.lastName,
        providers: 'firebase'
      })

      const message = encodeURIComponent(
        `Olá! Me cadastrei no site.\n\n` +
          `👤 Nome: ${data.firstName} ${data.lastName}\n` +
          `📧 Email: ${data.email}\n\n` +
          `Gostaria de saber mais informações! ( Sobre as unhas em gel! )`
      )

      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank')
    } catch (error) {
      const _error = error as AuthError
      if (_error.code === AuthErrorCodes.EMAIL_EXISTS) {
        return setError('email', { type: 'already-in-use' })
      }
    } finally {
      setIsloading(false)
    }
  }

  return (
    <UserContext.Provider
      value={{
        currentUser,
        isAuthentication,
        isLoading,
        errors,
        loginUser,
        logoutUser,
        handleSubmitPress,
        register,
        handleSubmit,
        watch
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
