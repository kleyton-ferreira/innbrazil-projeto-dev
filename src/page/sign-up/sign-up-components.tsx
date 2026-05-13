// COMPONENTS
import { useForm } from 'react-hook-form'
import Header from '../../components/header/header-components'
import CustomInput from '../../components/custom-input/custom-input-components'
import CustomButton from '../../components/custom-button/custom-button-components'

// STYLES
import {
  SignUpBg,
  SignUpContainerFlex,
  SignUpContainer,
  SignUpContent,
  SignUpHeadLine,
  SignUpInputContainer
} from './sign-up-styles'
import { MdLogin } from 'react-icons/md'
import { TextInputsLogin } from '../../scripts/scriptsText'

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
    formState: { errors }
  } = useForm<SignUpPageProps>()

  const handleSubmitPress = (data: SignUpPageProps) => {
    console.log({ data })
  }

  return (
    <>
      <Header />
      <SignUpBg>
        <SignUpContainerFlex>
          <SignUpContainer>
            <form onSubmit={handleSubmit(handleSubmitPress)}>
              <SignUpContent>
                <SignUpHeadLine>Crie a sua conta</SignUpHeadLine>

                {/* INPUT - 1 */}
                <SignUpInputContainer>
                  <p>Nome</p>
                  <CustomInput placeholder='Digite seu nome' />
                </SignUpInputContainer>

                {/* INPUT - 2 */}
                <SignUpInputContainer>
                  <p>Sobrenome</p>
                  <CustomInput placeholder='Digite seu sobrenome' />
                </SignUpInputContainer>

                {/* INPUT - 3 */}
                <SignUpInputContainer>
                  <p>E-mail</p>
                  <CustomInput placeholder='Digite seu e-mail' />
                </SignUpInputContainer>

                {/* INPUT - 4 */}
                <SignUpInputContainer>
                  <p>Senha</p>
                  <CustomInput placeholder='Digite sua senha' />
                </SignUpInputContainer>

                {/* INPUT - 5 */}
                <SignUpInputContainer>
                  <p>Confirmação de senha</p>
                  <CustomInput placeholder='cofirme sua senha' />
                </SignUpInputContainer>

                {/* INPUT - BUTTON */}
                <CustomButton type='submit' startIcon={<MdLogin size={20} />}>
                  {TextInputsLogin.customButton}
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
