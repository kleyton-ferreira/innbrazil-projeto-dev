import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

// COMPONENTS
import Header from '../../components/header/header-components'
import CustomInput from '../../components/custom-input/custom-input-components'
import CustomButton from '../../components/custom-button/custom-button-components'
import InputErrorMessage from '../../components/input-error-message/input-error-message'

// UTILITZ
import validator from 'validator'
import { auth, db } from '../../config/firebase.config'
import { addDoc, collection } from 'firebase/firestore'

// ICONS
import { MdLogin } from 'react-icons/md'

// SCRIPTS and TEXTSIGNUP
import { TextInputsSignUp } from '../../scripts/scriptsText'

// STYLES
import {
  SignUpBg,
  SignUpContainerFlex,
  SignUpContainer,
  SignUpContent,
  SignUpHeadLine,
  SignUpInputContainer,
  SignUpInputButton
} from './sign-up-styles'
import {
  AuthError,
  AuthErrorCodes,
  createUserWithEmailAndPassword
} from 'firebase/auth'
import { useContext, useEffect } from 'react'
import { UserContext } from '../../components/context/user-context'

interface SignUpPageProps {
  firstName: string
  lastName: string
  email: string
  password: string
  passwordConfirmation: string
}

const WHATSAPP_NUMBER = '5582987940126'

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError
  } = useForm<SignUpPageProps>()

  const navigate = useNavigate()

  const { isAuthentication } = useContext(UserContext)

  useEffect(() => {
    if (isAuthentication) {
      navigate('/')
    }
  }, [isAuthentication])

  const watchPassword = watch('password')

  const handleSubmitPress = async (data: SignUpPageProps) => {
    try {
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

      // navigate('/')
    } catch (error) {
      const _error = error as AuthError
      if (_error.code === AuthErrorCodes.EMAIL_EXISTS) {
        return setError('email', { type: 'already-in-use' })
      }
    }
  }

  return (
    <>
      <Header />
      <SignUpBg>
        <SignUpContainerFlex>
          <SignUpContainer>
            <form onSubmit={handleSubmit(handleSubmitPress)}>
              <SignUpContent>
                <SignUpHeadLine> {TextInputsSignUp.title} </SignUpHeadLine>

                {/* INPUT - 1 */}
                <SignUpInputContainer>
                  <p>Nome</p>
                  <CustomInput
                    hasError={!!errors?.firstName}
                    placeholder={TextInputsSignUp.placeholderName}
                    {...register('firstName', { required: true })}
                  />
                  {errors?.firstName?.type === 'required' && (
                    <InputErrorMessage>O nome e obrigatório.</InputErrorMessage>
                  )}
                </SignUpInputContainer>

                {/* INPUT - 2 */}
                <SignUpInputContainer>
                  <p>Sobrenome</p>
                  <CustomInput
                    hasError={!!errors?.lastName}
                    placeholder={TextInputsSignUp.placeholderLastName}
                    {...register('lastName', { required: true })}
                  />
                  {errors?.lastName?.type === 'required' && (
                    <InputErrorMessage>
                      O sobrenome e obrigatório.
                    </InputErrorMessage>
                  )}
                </SignUpInputContainer>

                {/* INPUT - 3 */}
                <SignUpInputContainer>
                  <p>E-mail</p>
                  <CustomInput
                    hasError={!!errors?.email}
                    placeholder={TextInputsSignUp.placeholderEmail}
                    {...register('email', {
                      required: true,
                      validate: (value) => validator.isEmail(value)
                    })}
                  />
                  {errors?.email?.type === 'required' && (
                    <InputErrorMessage>
                      O email e obrigatório.
                    </InputErrorMessage>
                  )}

                  {errors?.email?.type === 'already-in-use' && (
                    <InputErrorMessage>Esse email já existe.</InputErrorMessage>
                  )}

                  {errors?.email?.type === 'validate' && (
                    <InputErrorMessage>
                      Por favor, insira um email válido.
                    </InputErrorMessage>
                  )}
                </SignUpInputContainer>

                {/* INPUT - 4 */}
                <SignUpInputContainer>
                  <p>Senha</p>
                  <CustomInput
                    hasError={!!errors?.password}
                    type='password'
                    placeholder={TextInputsSignUp.placeholderPassword}
                    {...register('password', { required: true, minLength: 6 })}
                  />
                  {errors?.password?.type === 'required' && (
                    <InputErrorMessage>
                      A senha é obrigatória.
                    </InputErrorMessage>
                  )}

                  {errors?.password?.type === 'minLength' && (
                    <InputErrorMessage>
                      A senha deve conter 6 caracteres.
                    </InputErrorMessage>
                  )}
                </SignUpInputContainer>

                {/* INPUT - 5 */}
                <SignUpInputContainer>
                  <p>Confirmação de senha</p>
                  <CustomInput
                    hasError={!!errors?.passwordConfirmation}
                    type='password'
                    placeholder={
                      TextInputsSignUp.placeholderPasswordConfirmation
                    }
                    {...register('passwordConfirmation', {
                      required: true,
                      minLength: 6,
                      validate: (value) => value === watchPassword
                    })}
                  />
                  {errors?.passwordConfirmation?.type === 'required' && (
                    <InputErrorMessage>
                      A confirmação da senha é obrigatória.
                    </InputErrorMessage>
                  )}
                  {errors?.passwordConfirmation?.type === 'validate' && (
                    <InputErrorMessage>
                      As confirmação de senha precisa ser igual.
                    </InputErrorMessage>
                  )}
                </SignUpInputContainer>

                {/* INPUT - BUTTON */}
                <SignUpInputButton>
                  <CustomButton type='submit' startIcon={<MdLogin size={20} />}>
                    Crie sua conta
                  </CustomButton>
                </SignUpInputButton>
              </SignUpContent>
            </form>
          </SignUpContainer>
        </SignUpContainerFlex>
      </SignUpBg>
    </>
  )
}

export default SignUpPage
