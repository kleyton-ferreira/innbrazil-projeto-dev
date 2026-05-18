import { FunctionComponent, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../../config/firebase.config'

// STYLES
import {
  HeaderItensContainer,
  HeaderItensImg,
  HeaderItensTitle,
  HeaderItensAccount
} from './header-itens-styles'

// COMPONENTS
import Countdown from '../coutdown/ countdown.components'
import Button from '../button/button-components'

// UTILITZ
import { UserContext } from '../context/user-context'

interface HeaderItensProps {
  title: string
  subTitle: string
  images: any
  login?: string
  account?: string
  signOutOut?: string
}

const HeaderItens: FunctionComponent<HeaderItensProps> = ({
  title,
  subTitle,
  images,
  login,
  account,
  signOutOut
}) => {
  const navigate = useNavigate()

  const { isAuthentication } = useContext(UserContext)

  const handleLoginPage = () => {
    navigate('/login')
  }

  const handleSignUpPage = () => {
    navigate('/signup')
  }

  return (
    <>
      <HeaderItensContainer>
        <HeaderItensImg to='/'>
          <img src={images} alt='logo' />
        </HeaderItensImg>

        <HeaderItensTitle>
          <p>
            {title} <span> {subTitle} </span>
          </p>
          <Countdown />
        </HeaderItensTitle>
        <Button
          to='https://www.globo.com/'
          target='_blank'
          message='GARANTIR INGRESSO'
        />
        <HeaderItensAccount>
          {!isAuthentication && (
            <>
              <button onClick={handleLoginPage}> {login} </button>
              <button onClick={handleSignUpPage}> {account} </button>
            </>
          )}

          {isAuthentication && (
            <button onClick={() => signOut(auth)}> {signOutOut} </button>
          )}
        </HeaderItensAccount>
      </HeaderItensContainer>
    </>
  )
}

export default HeaderItens
