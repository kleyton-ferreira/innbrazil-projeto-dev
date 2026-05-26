import { FunctionComponent, ButtonHTMLAttributes, MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import { ButtonNav, ButtonIcon } from './button-style'

type ButtonVariant = 'primary' | 'secondary' | 'wats' | 'cards' | 'btnBanner'
type TextVariant = 'textxl' | 'text2x1'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  message?: string
  variant?: ButtonVariant
  variantText?: TextVariant
  icon?: React.ReactNode
  to?: string
  target?: string
  scrollTo?: string
}

const Button: FunctionComponent<ButtonProps> = ({
  message,
  variant = 'primary',
  variantText = 'textxl',
  icon,
  to,
  target,
  scrollTo,
  onClick,
  children,
  ...rest
}) => {
  const handleClick = (eventButton: MouseEvent<HTMLButtonElement>) => {
    if (scrollTo) {
      eventButton.preventDefault()
      document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth' })
    }
    onClick?.(eventButton)
  }

  const button = (
    <ButtonNav
      {...rest}
      onClick={handleClick}
      variant={variant}
      variantText={variantText}
    >
      <ButtonIcon>{icon && <span>{icon}</span>}</ButtonIcon>

      {message && <p>{message}</p>}
      {children}
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
