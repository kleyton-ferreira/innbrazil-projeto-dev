import styled from 'styled-components'
import Colors from '../../theme/theme.colors'

export const ConfirmedContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const ConfirmedContent = styled.div`
  margin-bottom: -30px;
  display: flex;
  gap: 20px;
  justify-content: center;
`

export const ConfirmedTitle = styled.div`
  margin-top: 88px;

  h2 {
    font-size: 56px;
    background: linear-gradient(to left, #d30275 15%, #e5719b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;

    margin-bottom: 10px;
  }

  h3 {
    color: ${Colors.text.gray};
    font-size: 28px;
    font-weight: 400;
    margin-bottom: 20px;
  }

  p {
    color: ${Colors.text.gray};
    font-size: 20px;
    font-weight: 300;
  }

  span {
    display: block;
  }
`

export const ConfirmedTitleFooter = styled.div`
  margin-top: 54px;
  margin-bottom: 54px;

  h2 {
    font-size: 30px;
    color: ${Colors.text.gray};
    font-weight: 500;
  }

  strong {
    font-size: 40px;
    color: ${Colors.text.pink};
  }

  span {
    display: block;
    line-height: 30px;
  }
`

export const ConfirmedButton = styled.div`
  width: 20%;
  margin: auto;
`
