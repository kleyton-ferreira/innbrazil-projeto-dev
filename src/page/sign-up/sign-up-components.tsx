import { useForm } from 'react-hook-form'

// COMPONENTS
import Header from '../../components/header/header-components'
import CustomInput from '../../components/custom-input/custom-input-components'
import CustomButton from '../../components/custom-button/custom-button-components'
import InputErrorMessage from '../../components/input-error-message/input-error-message'

// UTILITZ
import validator from 'validator'

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
  SignUpInputContainer
} from './sign-up-styles'

interface SignUpPageProps {
  name: string
  lastName: string
  email: string
  password: string
  passwordConfirmation: string
}

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<SignUpPageProps>()

  const watchPassword = watch('password')

  const handleSubmitPress = (data: SignUpPageProps) => {
    console.log({ data })
  }

  console.log({ errors })

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
                    hasError={!!errors?.name}
                    placeholder={TextInputsSignUp.placeholderName}
                    {...register('name', { required: true })}
                  />

                  {errors?.name?.type === 'required' && (
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
                </SignUpInputContainer>

                {/* INPUT - 4 */}
                <SignUpInputContainer>
                  <p>Senha</p>
                  <CustomInput
                    hasError={!!errors?.password}
                    type='password'
                    placeholder={TextInputsSignUp.placeholderPassword}
                    {...register('password', { required: true })}
                  />
                  {errors?.password?.type === 'required' && (
                    <InputErrorMessage>
                      A senha é obrigatória.
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
                      validate: (value) => {
                        return value === watchPassword
                      }
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
                <CustomButton type='submit' startIcon={<MdLogin size={20} />}>
                  Crie sua conta
                </CustomButton>
              </SignUpContent>
            </form>
          </SignUpContainer>
        </SignUpContainerFlex>
      </SignUpBg>
    </>
  )
}

export default SignUpPage
