import { FunctionComponent } from 'react'
import { useNavigate } from 'react-router-dom'

// STYLES
import {
  HeaderItensContainer,
  HeaderItensImg,
  HeaderItensTitle,
  HeaderItensAccount
} from './header-itens-styles'

import Countdown from '../coutdown/ countdown.components'
import Button from '../button/button-components'

interface HeaderItensProps {
  title: string
  subTitle: string
  images: any
  login: string
  account: string
}

const HeaderItens: FunctionComponent<HeaderItensProps> = ({
  title,
  subTitle,
  images,
  login,
  account
}) => {
  const navigate = useNavigate()

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
          <p onClick={handleLoginPage}> {login} </p>
          <p onClick={handleSignUpPage}> {account} </p>
        </HeaderItensAccount>
      </HeaderItensContainer>
    </>
  )
}

export default HeaderItens
