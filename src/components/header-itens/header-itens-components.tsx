import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

// STYLES
import {
  HeaderItensContainer,
  HeaderItensImg,
  HeaderItensTitle
} from './header-itens-styles'

import Countdown from '../coutdown/ countdown.components'
import Button from '../button/button-components'

interface HeaderItensProps {
  title: string
  subTitle: string
  images: any
}

const HeaderItens: FunctionComponent<HeaderItensProps> = ({
  title,
  subTitle,
  images
}) => {
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
          <Button message='GARANTIR INGRESSO' />
        </Link>
      </HeaderItensContainer>
    </>
  )
}

export default HeaderItens
