import React, { FunctionComponent, ButtonHTMLAttributes } from 'react'

// STYLES
import { CustomButtonContainer, IconContainer } from './custom-button-style'

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string
  startIcon?: React.ReactNode
}

const CustomButton: FunctionComponent<CustomButtonProps> = ({
  children,
  startIcon
}) => {
  return (
    <>
      <CustomButtonContainer>
        {startIcon && <IconContainer> {startIcon} </IconContainer>}
        {children}
      </CustomButtonContainer>
    </>
  )
}

export default CustomButton
