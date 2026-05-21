// COMPONENTS
import Header from '../../components/header/header-components'
import CustomButton from '../../components/custom-button/custom-button-components'
import CustomInput from '../../components/custom-input/custom-input-components'
import InputErrorMessage from '../../components/input-error-message/input-error-message'
import Loading from '../../components/loading/loading.components'

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
import { BsGoogle } from 'react-icons/bs'
import { MdLogin } from 'react-icons/md'

// UTILITY
import validator from 'validator'
import { useContext, useEffect } from 'react'
import { LoginContext } from '../../components/context/login-context'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const {
    isAuthentication,
    isLoadingAuth,
    errors,
    handleSubmit,
    handleSubmitPress,
    handleSignInWithGooglePress,
    isLoading,
    register
  } = useContext(LoginContext)

  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoadingAuth && isAuthentication) {
      navigate('/')
    }
  }, [isAuthentication, isLoadingAuth, navigate])

  return (
    <>
      <Header />
      <LoginBg>
        {isLoading && <Loading />}
        <LoginContainerFlex>
          <LoginContainer>
            <LoginHeadLine>{TextInputsLogin.title}</LoginHeadLine>
            <CustomButton
              startIcon={<BsGoogle size={25} />}
              onClick={handleSignInWithGooglePress}
            >
              {TextInputsLogin.buttonGoogle}
            </CustomButton>
            <form onSubmit={handleSubmit(handleSubmitPress)}>
              <LoginContent>
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
                      E-mail ou senha incorretos.
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
