import styled from "styled-components";
import Colors from "../../theme/theme.colors";

export const PointsContainer = styled.div`
 position: relative;
 top: 130px;
 display: flex;
 align-items: center;
 justify-content: center;
 gap: 30px;
`

export const PointsItens = styled.div`

 p {
    color: ${Colors.text.pink};
    font-size: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${Colors.text.pinkLight} ;
 }
 
 span {
    color: ${Colors.text.pink};
    font-weight: bold;
 }
`

