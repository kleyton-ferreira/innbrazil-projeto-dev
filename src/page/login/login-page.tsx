// COMPONENTS
import Header from '../../components/header/header-components'
import CustomButton from '../../components/custom-button/custom-button-components'
import CustomInput from '../../components/custom-input/custom-input-components'
import InputErrorMessage from '../../components/input-error-message/input-error-message'

// SCRIPT and TEXT
import { TextInputs } from '../../scripts/scriptsText'

import {
  LoginContainer,
  LoginContent,
  LoginSubtitle,
  LoginInputContainer,
  LoginHeadLine,
  LoginContainerFlex,
  LoginBg
} from './login-style'

// ICONS
import { FaGoogle } from 'react-icons/fa'
import { MdLogin } from 'react-icons/md'
import { useForm } from 'react-hook-form'

// UTILITZ
import validator from 'validator'

interface LoginPageForm {
  email: string
  password: string
}

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginPageForm>()

  const handleSubmitPress = (data: LoginPageForm) => {
    console.log({ data })
  }

  console.log({ errors })

  return (
    <>
      <Header />
      <LoginBg>
        <LoginContainerFlex>
          <LoginContainer>
            <form onSubmit={handleSubmit(handleSubmitPress)}>
              <LoginContent>
                <LoginHeadLine>{TextInputs.title}</LoginHeadLine>

                <CustomButton type='button' startIcon={<FaGoogle size={25} />}>
                  {TextInputs.buttonGoogle}
                </CustomButton>

                <LoginSubtitle>{TextInputs.subTitle}</LoginSubtitle>

                {/* INPUT - 1 */}
                <LoginInputContainer>
                  <p>{TextInputs.labelEmail}</p>
                  <CustomInput
                    hasError={!!errors?.email}
                    placeholder={TextInputs.placeholderEmail}
                    {...register('email', {
                      required: true,
                      validate: (value) => {
                        return validator.isEmail(value)
                      }
                    })}
                  />

                  {errors?.email?.type === 'required' && (
                    <InputErrorMessage>
                      O email e obrigatório.
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
                  <p>{TextInputs.labelPassword}</p>
                  <CustomInput
                    hasError={!!errors?.password}
                    type='password'
                    placeholder={TextInputs.placeholderPassword}
                    {...register('password', { required: true })}
                  />
                  {errors?.password?.type === 'required' && (
                    <InputErrorMessage>
                      A senha é obrigatória.
                    </InputErrorMessage>
                  )}
                </LoginInputContainer>

                <CustomButton type='submit' startIcon={<MdLogin size={20} />}>
                  {TextInputs.customButton}
                </CustomButton>
              </LoginContent>
            </form>
          </LoginContainer>
        </LoginContainerFlex>
      </LoginBg>
    </>
  )
}

export default LoginPage
