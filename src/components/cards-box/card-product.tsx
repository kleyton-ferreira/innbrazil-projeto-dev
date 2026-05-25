// COMPONENTS STYLE
import CardBoxItens from '../card-box-itens/card-box-itens-components'

// SCRIPT and TEXT && IMAGES
import { CardBoxText } from '../../scripts/scriptsText'
import { Images } from '../../scripts/scriptsImg'

const CardProduct = () => {
  return (
    <>
      <CardBoxItens
        img={Images.IconOne}
        title={CardBoxText.titleOne}
        description={CardBoxText.descOne}
        subDescription={CardBoxText.subDescOne}
      />

      <CardBoxItens
        img={Images.IconTwo}
        title={CardBoxText.titleTwo}
        description={CardBoxText.descTwo}
        subDescription={CardBoxText.descTwo}
      />

      <CardBoxItens
        img={Images.IconThree}
        title={CardBoxText.titleThree}
        description={CardBoxText.descThree}
        subDescription={CardBoxText.descThree}
      />

      <CardBoxItens
        img={Images.IconFour}
        title={CardBoxText.titleFour}
        description={CardBoxText.descFour}
        subDescription={CardBoxText.descFour}
      />
    </>
  )
}

export default CardProduct
