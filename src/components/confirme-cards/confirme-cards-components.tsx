import { FunctionComponent } from 'react'

import {
  ConfirmedCardsContainer,
  ConfirmedCardsItens
} from './confirmed-styles'

interface ConfirmeCardsProps {
  title: string
  description: string
  img: string
  altText?: string
}

const ConfirmeCards: FunctionComponent<ConfirmeCardsProps> = ({
  title,
  description,
  img,
  altText = 'image'
}) => {
  return (
    <ConfirmedCardsContainer>
      <ConfirmedCardsItens>
        <img src={img} alt={altText} />
        <p>
          {title} <span>{description}</span>
        </p>
      </ConfirmedCardsItens>
    </ConfirmedCardsContainer>
  )
}

export default ConfirmeCards
