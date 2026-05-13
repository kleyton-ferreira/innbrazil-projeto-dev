import { FunctionComponent, ReactNode } from 'react'

// STYLE
import {
  CardsItensContainer,
  CardsItensContent,
  CardsItensIcon,
  CardsItensParagraph,
  CardsItensText
} from './cards-itens.style'

interface CardsItenProps {
  icon: ReactNode
  text: string
  description: string
}

const CardsIten: FunctionComponent<CardsItenProps> = ({
  icon,
  text,
  description
}) => {
  return (
    <div>
      <CardsItensContainer>
        <CardsItensContent>
          <CardsItensIcon> {icon} </CardsItensIcon>
          <CardsItensText> {text} </CardsItensText>
          <CardsItensParagraph> {description} </CardsItensParagraph>
        </CardsItensContent>
      </CardsItensContainer>
    </div>
  )
}

export default CardsIten
