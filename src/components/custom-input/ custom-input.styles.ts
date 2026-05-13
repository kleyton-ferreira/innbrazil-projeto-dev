import styled from 'styled-components'
import Colors from '../../theme/theme.colors'

type CustomIputContainerProps = {
  hasError?: boolean
}

export const CustomInputContainer = styled.input<CustomIputContainerProps>`
  padding: 14px;
  width: 100%;
  border: none;
  background-color: ${Colors.text.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin-bottom: 6px;
  font-weight: 400;
  border: ${(props) => (props.hasError ? `2px solid ${Colors.input.error}` : 'none')};
  
  &:focus {
  outline: 1px solid ${Colors.text.white};
}

  &::placeholder {
    color: ${(props) =>
    props.hasError ? Colors.input.error : Colors.text.gray};
  }

  &:focus {
    color: ${(props) =>
    props.hasError ? 'none' : `2px solid ${Colors.input.error}`};
  }
`