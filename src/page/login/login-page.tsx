// COMPONENTS
import Header from '../../components/header/header-components'
import CustomButton from '../../components/custom-button/custom-button-components'
import CustomInput from '../../components/custom-input/custom-input-components'
import InputErrorMessage from '../../components/input-error-message/input-error-message'

// SCRIPT and TEXT
import { TextInputsLogin } from '../../scripts/scriptsText'

import {
  LoginContainer,
  LoginContent,
  LoginSubtitle,
  LoginInputContainer,
  LoginHeadLine,
  LoginContainerFlex,
  LoginBg,
  LoginInputButton
} from './login-style'

// ICONS
import { FaGoogle } from 'react-icons/fa'
import { MdLogin } from 'react-icons/md'
import { useForm } from 'react-hook-form'

// UTILITY
import validator from 'validator'
import {
  AuthError,
  AuthErrorCodes,
  signInWithEmailAndPassword
} from 'firebase/auth'
import { auth } from '../../config/firebase.config'

interface LoginPageForm {
  email: string
  password: string
}

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<LoginPageForm>()

  const sendWhatsAppConfirmation = (email: string) => {
    const phone = '5582988322654'
    const message = encodeURIComponent(
      `Olá! Login realizado com sucesso.\nConfirmação de agendamento para o e-mail: ${email}`
    )
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
  }

  const handleSubmitPress = async (data: LoginPageForm) => {
    try {
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
    }
  }

  return (
    <>
      <Header />
      <LoginBg>
        <LoginContainerFlex>
          <LoginContainer>
            <form onSubmit={handleSubmit(handleSubmitPress)}>
              <LoginContent>
                <LoginHeadLine>{TextInputsLogin.title}</LoginHeadLine>

                <CustomButton type='button' startIcon={<FaGoogle size={25} />}>
                  {TextInputsLogin.buttonGoogle}
                </CustomButton>

                <LoginSubtitle>{TextInputsLogin.subTitle}</LoginSubtitle>

                {/* INPUT - 1 */}
                <LoginInputContainer>
                  <p>{TextInputsLogin.labelEmail}</p>
                  <CustomInput
                    hasError={!!errors?.email}
                    placeholder={TextInputsLogin.placeholderEmail}
                    {...register('email', {
                      required: true,
                      validate: (value) => validator.isEmail(value)
                    })}
                  />

                  {errors?.email?.type === 'required' && (
                    <InputErrorMessage>
                      O email é obrigatório.
                    </InputErrorMessage>
                  )}

                  {errors?.email?.type === 'validate' && (
                    <InputErrorMessage>
                      Por favor, insira um email válido.
                    </InputErrorMessage>
                  )}
                </LoginInputContainer>

                {/* INPUT - 2 */}
                <LoginInputContainer>
                  <p>{TextInputsLogin.labelPassword}</p>
                  <CustomInput
                    hasError={!!errors?.password}
                    type='password'
                    placeholder={TextInputsLogin.placeholderPassword}
                    {...register('password', { required: true })}
                  />

                  {errors?.password?.type === 'required' && (
                    <InputErrorMessage>
                      A senha é obrigatória.
                    </InputErrorMessage>
                  )}

                  {errors?.password?.type === 'invalid-credentials' && (
                    <InputErrorMessage>
                      Insira uma senha válida.
                    </InputErrorMessage>
                  )}
                </LoginInputContainer>

                <LoginInputButton>
                  <CustomButton type='submit' startIcon={<MdLogin size={20} />}>
                    {TextInputsLogin.customButton}
                  </CustomButton>
                </LoginInputButton>
              </LoginContent>
            </form>
          </LoginContainer>
        </LoginContainerFlex>
      </LoginBg>
    </>
  )
}

export default LoginPage
