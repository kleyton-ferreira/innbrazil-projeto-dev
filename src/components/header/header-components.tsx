// COMPONENTS
import HeaderItens from '../header-itens/header-itens-components'

// STYLES
import { HeaderContainer, HeaderContent } from './header-style'

// SCRIPT and IMAGES and TEXT
import { Images } from '../../scripts/scriptsImg'
import { TextsHeader } from '../../scripts/scriptsText'

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <HeaderItens
            images={Images.logo}
            title={TextsHeader.titleOne}
            subTitle={TextsHeader.titleTwo}
            login={TextsHeader.loginButton}
            account={TextsHeader.accountButton}
          />
        </HeaderContent>
      </HeaderContainer>
    </>
  )
}

export default Header
