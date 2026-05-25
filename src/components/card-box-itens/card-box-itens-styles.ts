import styled from "styled-components";
import Colors from "../../theme/theme.colors";


export const CardsBoxContainer = styled.div`
 width: 370px;
 height: 330px;
 background: ${Colors.background.backgroundPink};
 border-radius: 20px;
 padding: 20px;

 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;

 img {
    margin-bottom: 10px;
 }

 h2 {
    font-size: 30px;
    color: ${Colors.text.white};
    font-weight: 800;
    margin-bottom: 10px;   
    
 }
 
 p {
    font-size: 18px;
    color: ${Colors.text.white};
    font-weight: 300;
    text-align: center;
 }

 span {
   display: block;
 }

`