import styled from "styled-components";
import { Link } from "react-router-dom";
import Colors from "../../theme/theme.colors";

export const HeaderItensContainer = styled.div`
 display: flex;
 justify-content: space-around;
 align-items: center;
`

export const HeaderItensImg = styled(Link)`
    img {
        width: 234px;
        height: 85px;
    }
`
export const HeaderItensTitle = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  
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

export const HeaderItensAccount = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  
  button {
   font-size: 18px;
   font-weight: 300;
   color: ${Colors.text.white};
   cursor: pointer;
   border: 1px solid ${Colors.text.white};
   padding: 6px 30px;
   border-radius: 30px;
   transition: all 0.3s ease;
   background: transparent;
  }

  button:hover {
    background-color: ${Colors.background.backgroundCardsYellow};
    color: ${Colors.text.pink};
    font-weight: 400;
  }
`

export const HeaderIconCart = styled.div`
 cursor: pointer;
 display: flex;
 gap: 1px;
 

 span {
   color: ${Colors.text.white};
 }

 p {
   transform: translateY(-6px);
   color: ${Colors.text.white};
   font-size: 18px;
 }
`