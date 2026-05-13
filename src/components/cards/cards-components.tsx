// COMPONENTS
import CardsIten from '../cards-itens/cards-itens-components'

// STYLE
import { CardsContainer } from './cards-style'

// SCRIPT and TEXT
import { TextCards } from '../../scripts/scriptsText'

// ICONS
import { LuUsers } from 'react-icons/lu'
import { IoFlagSharp } from 'react-icons/io5'

const Cards = () => {
  return (
    <>
      <CardsContainer>
        <CardsIten
          icon={<LuUsers size={50} />}
          text={TextCards.title}
          description={TextCards.description}
        />
        <CardsIten
          icon={<IoFlagSharp size={50} />}
          text={TextCards.subTitle}
          description={TextCards.subDescription}
        />
      </CardsContainer>
    </>
  )
}

export default Cards
