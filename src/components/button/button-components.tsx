import { FunctionComponent } from 'react'
import { ButtonNav } from './button-style'

type ButtonVariant = 'primary' | 'secondary' | 'wats' | 'cards'

interface ButtonProps {
  message: string
  variant?: ButtonVariant
}

const Button: FunctionComponent<ButtonProps> = ({
  message,
  variant = 'primary'
}) => {
  return (
    <>
      <ButtonNav variant={variant}>
        <p>
          {message} <strong> </strong>
        </p>
      </ButtonNav>
    </>
  )
}

export default Button
