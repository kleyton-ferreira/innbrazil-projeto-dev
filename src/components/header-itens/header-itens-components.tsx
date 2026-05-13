import { FunctionComponent } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// STYLES
import {
  HeaderItensContainer,
  HeaderItensImg,
  HeaderItensTitle,
  HeaderItensAccount
} from './header-itens-styles'

import Countdown from '../coutdown/ countdown.components'
import Button from '../button/button-components'

// SCRIPT and TEXT
import { TextsHeader } from '../../scripts/scriptsText'

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

  return (
    <>
      <HeaderItensContainer>
        <Link to='/'>
          <HeaderItensImg>
            <img src={images} alt='logo' />
          </HeaderItensImg>
        </Link>
        <HeaderItensTitle>
          <p>
            {title} <span> {subTitle} </span>
          </p>
          <Countdown />
        </HeaderItensTitle>
        <Link to=''>
          <Button message={TextsHeader.button} icon='' />
        </Link>
        <HeaderItensAccount>
          <p onClick={handleLoginPage}> {login} </p>
          <p> {account} </p>
        </HeaderItensAccount>
      </HeaderItensContainer>
    </>
  )
}

export default HeaderItens
