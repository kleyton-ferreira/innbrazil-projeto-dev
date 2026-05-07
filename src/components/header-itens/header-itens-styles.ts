import styled from "styled-components";
import Colors from "../../theme/theme.colors";

export const HeaderItensContainer = styled.div`
 display: flex;
 justify-content: space-around;
 align-items: center;
`

export const HeaderItensImg = styled.div`
    img {
        width: 234px;
        height: 85px;
    }
`
export const HeaderItensTitle = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  
  p {
   font-size: 22px;
   font-weight: 300;
   color: ${Colors.text.white};
  }

  span {
    display: block;
    font-weight: bold;
  }

`