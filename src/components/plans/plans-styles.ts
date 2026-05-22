import styled from "styled-components";
import Colors from "../../theme/theme.colors";

export const PlansContainer = styled.div`
  padding: 0 300px;
  display: flex;
  justify-content: center;
`

export const PlansContent = styled.div`
 display: flex;
 align-items: center;
 gap: 50px;
`

export const PlansText = styled.div`
  color: ${Colors.text.gray};
  
   
  h2 {
    font-size: 40px;
    font-weight: 300;
    margin: 10px 0;
  }

  span {
    display: block;
  }

  strong {
    font-weight: bold;
  }

  p {
    font-size: 20px;
  }
`

export const PlansBorder = styled.div`
 position: relative;
 width: 340px;
 height: 1px;
 background: ${Colors.text.gray};
 margin: 10px 0;

 &::after {
   content: "";
   position: absolute;
   top: -1px;
   left: 0;
   width: 80px;
   height: 3px;
   background: ${Colors.text.pink};
 }
`