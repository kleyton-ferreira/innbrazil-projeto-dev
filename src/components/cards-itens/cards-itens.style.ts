import styled from "styled-components";
import Colors from "../../theme/theme.colors";

export const CardsItensContainer = styled.div` 
 margin-top: 206px;
 height: 440px;
`

export const CardsItensContent = styled.div`
 background: ${Colors.background.backgroundPink};
 width: 780px;
 height: 240px;
 padding: 24px;
 text-align: center;
 border-radius: 40px;
`

export const CardsItensIcon = styled.span` 
color: ${Colors.text.white};
`

export const CardsItensText = styled.h2` 
  color: ${Colors.text.white};
  font-size: 32px;
  font-weight: 900;
`

export const CardsItensParagraph = styled.p` 
  color: ${Colors.text.white};
  font-size: 20px;
  font-weight: 200;
  width: 636px;
  margin: 0 auto;
`