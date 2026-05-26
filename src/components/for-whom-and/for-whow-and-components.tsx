import { ForWhowContainer } from './for-whow-and-styles'

// COMPONENTS
import ForWhomAndItens from '../for-whom-and-itens/for-whom-and-itens-components'

// SCRIPTS
import { Images } from '../../scripts/scriptsImg'
import { ForWhowAndText } from '../../scripts/scriptsText'

const ForWhowAnd = () => {
  return (
    <>
      <ForWhowContainer>
        <ForWhomAndItens
          img={Images.ModeloPlay}
          btn={Images.IconPlay}
          title={ForWhowAndText.titleOne}
          subTitle={ForWhowAndText.titleTwo}
        />
      </ForWhowContainer>
    </>
  )
}

export default ForWhowAnd
