import styled from "styled-components";
import Colors from "../../theme/theme.colors";

export const PlansCardContainer = styled.div`
 background: ${Colors.background.backgroundPink};
 width: 960px;
 border-radius: 60px;
 padding: 90px 105px;
`

export const PlansCardText = styled.div`
 color: ${Colors.text.white};
 display: flex;
 flex-direction: column;
 gap: 30px;
 
 p {
    font-size: 22px;
    font-weight: 500;
 }

 span {
    font-size: 24px;
    position: relative;
    top: 4px;
 }
`

export const PlansCardButton = styled.div`
 width: 45%;
 margin-top: 50px;
 position: relative;
 z-index: 1;
`