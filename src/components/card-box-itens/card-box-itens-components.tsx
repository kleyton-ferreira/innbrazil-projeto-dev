import { FunctionComponent } from 'react'

// COMPONENTS
import { CardsBoxContainer } from './card-box-itens-styles'

interface CardBoxItensProps {
  title: string
  description: string
  subDescription: string
  img: string
  altText?: string
}

const CardBoxItens: FunctionComponent<CardBoxItensProps> = ({
  title,
  description,
  subDescription,
  img,
  altText = 'image'
}) => {
  return (
    <>
      <CardsBoxContainer>
        <img src={img} alt={altText} />
        <h2> {title} </h2>
        <p>
          {description} <span> {subDescription} </span>
        </p>
      </CardsBoxContainer>
    </>
  )
}

export default CardBoxItens
