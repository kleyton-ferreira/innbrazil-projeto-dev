import { FunctionComponent, ButtonHTMLAttributes } from 'react'
import { ButtonNav, ButtonIcon } from './button-style'

type ButtonVariant = 'primary' | 'secondary' | 'wats' | 'cards' | 'btnBanner'

type TextVariant = 'textxl' | 'text2x1'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  message: string
  variant?: ButtonVariant
  variantText?: TextVariant
  icon: any
}

const Button: FunctionComponent<ButtonProps> = ({
  message,
  variant = 'primary',
  variantText = 'textxl',
  icon
}) => {
  return (
    <>
      <ButtonNav variant={variant} variantText={variantText}>
        <ButtonIcon>{icon && <span>{icon}</span>}</ButtonIcon>
        <p>
          {message} <strong> </strong>
        </p>
      </ButtonNav>
    </>
  )
}

export default Button
