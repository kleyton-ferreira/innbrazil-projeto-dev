import { useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { UserContext } from '../../components/context/user-context'

// UTILITZ
import validator from 'validator'

// ICONS
import { MdLogin } from 'react-icons/md'

// SCRIPTS and TEXTSIGNUP
import { TextInputsSignUp } from '../../scripts/scriptsText'

// COMPONENTS
import Header from '../../components/header/header-components'
import CustomInput from '../../components/custom-input/custom-input-components'
import CustomButton from '../../components/custom-button/custom-button-components'
import InputErrorMessage from '../../components/input-error-message/input-error-message'
import Loading from '../../components/loading/loading.components'

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

const SignUpPage = () => {
  const {
    isAuthentication,
    handleSubmitPress,
    isLoading,
    register,
    handleSubmit,
    watch,
    errors,
    reset
  } = useContext(UserContext)

  const navigate = useNavigate()

  const watchPassword = watch('password')

  useEffect(() => {
    if (isAuthentication) {
      navigate('/')
    }
    if (!isAuthentication) {
      reset()
    }
  }, [isAuthentication])

  return (
    <>
      <Header />
      {isLoading && <Loading />}
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
