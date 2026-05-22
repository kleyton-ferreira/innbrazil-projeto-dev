import React, { FunctionComponent } from 'react'

// COMPONENTS
import Button from '../button/button-components'

// ICONS
import { BsArrowRightShort } from 'react-icons/bs'

import {
  PlansCardContainer,
  PlansCardText,
  PlansCardButton
} from './plans-card-styles'

interface PlansCardProps {
  children?: React.ReactNode | string
}

const PlansCard: FunctionComponent<PlansCardProps> = ({ children }) => {
  return (
    <>
      <PlansCardContainer>
        <PlansCardText> {children} </PlansCardText>
        <PlansCardButton>
          <Button
            to='https://www.globo.com/'
            target='_blank'
            message='Quero me Inscrever Agora'
            variant='cards'
            icon={<BsArrowRightShort size={36} />}
          />
        </PlansCardButton>
      </PlansCardContainer>
    </>
  )
}

export default PlansCard
