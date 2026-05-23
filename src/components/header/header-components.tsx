import { useEffect, useState } from 'react'

// COMPONENTS
import HeaderItens from '../header-itens/header-itens-components'

// STYLES
import { HeaderContainer, HeaderContent } from './header-style'

// SCRIPT and IMAGES and TEXT
import { Images } from '../../scripts/scriptsImg'
import { TextsHeader } from '../../scripts/scriptsText'

const Header = () => {
  // FUNÇAO DE SCROLAR A BARRA
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <HeaderContainer scrolled={scrolled}>
        <HeaderContent>
          <HeaderItens
            images={Images.logo}
            title={TextsHeader.titleOne}
            subTitle={TextsHeader.titleTwo}
            login={TextsHeader.loginButton}
            account={TextsHeader.accountButton}
            signOutOut={TextsHeader.signOutButton}
          />
        </HeaderContent>
      </HeaderContainer>
    </>
  )
}

export default Header
