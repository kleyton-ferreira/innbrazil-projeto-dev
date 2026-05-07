// COMPONENTS
import HeaderItens from '../header-itens/header-itens-components'

// STYLES
import { HeaderContainer, HeaderContent } from './header-style'

// SCRIPT and IMAGES
import { Images } from '../../scripts/scriptsImg'

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <HeaderItens
            images={Images.logo}
            title='PRIMEIRO LOTE LIBERADO'
            subTitle='POR TEMPO LIMITADO'
          />
        </HeaderContent>
      </HeaderContainer>
    </>
  )
}

export default Header
