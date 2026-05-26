import { FunctionComponent } from 'react'

import ForWhowText from './for-whow-and-text'

// STYLES
import {
  ForWhowItensContainer,
  ForWhowItensText,
  ForWhowItensContentImg,
  ForWhowItensImage,
  ForWhowItensBtn,
  ForWhowItensContent,
  PlayButton
} from './for-whom-and-itens-styles'

interface ForWhomAndItensProps {
  img: string
  altText?: string
  btn: string
  title: string
  subTitle: string
}

const ForWhomAndItens: FunctionComponent<ForWhomAndItensProps> = ({
  img,
  btn,
  title,
  subTitle,
  altText = 'image'
}) => {
  return (
    <>
      <ForWhowItensContainer>
        <ForWhowItensContentImg>
          <ForWhowItensImage>
            <img src={img} alt={altText} />
          </ForWhowItensImage>
          <ForWhowItensBtn>
            <PlayButton>
              <img src={btn} alt={altText} />
            </PlayButton>
          </ForWhowItensBtn>
        </ForWhowItensContentImg>
        <ForWhowItensContent>
          <ForWhowItensText>
            <h2>
              {title} <span> {subTitle} </span>
            </h2>
          </ForWhowItensText>
          <ForWhowText />
        </ForWhowItensContent>
      </ForWhowItensContainer>
    </>
  )
}

export default ForWhomAndItens
