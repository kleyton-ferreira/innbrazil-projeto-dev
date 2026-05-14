import { FunctionComponent, ButtonHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import { ButtonNav, ButtonIcon } from './button-style'

type ButtonVariant = 'primary' | 'secondary' | 'wats' | 'cards' | 'btnBanner'

type TextVariant = 'textxl' | 'text2x1'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  message: string
  variant?: ButtonVariant
  variantText?: TextVariant
  icon?: React.ReactNode
  to?: string
  target?: string
}

const Button: FunctionComponent<ButtonProps> = ({
  message,
  variant = 'primary',
  variantText = 'textxl',
  icon,
  to,
  target
}) => {
  const button = (
    <ButtonNav variant={variant} variantText={variantText}>
      <ButtonIcon>{icon && <span>{icon}</span>}</ButtonIcon>
      <p>
        {message} <strong> </strong>
      </p>
    </ButtonNav>
  )

  if (to) {
    return (
      <Link to={to} target={target} style={{ textDecoration: 'none' }}>
        {button}
      </Link>
    )
  }

  return button
}

export default Button
