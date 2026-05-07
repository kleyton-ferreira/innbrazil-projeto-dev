import styled from "styled-components";
import Colors from "../../theme/theme.colors";


export const CountdownContainer = styled.div`
 display: flex;
 gap: 16px;
 margin-left: 30px;
`

export const CountdownContent = styled.div`
 text-align: center;
 display: flex;
 gap: 10px;
 justify-content: center;
 align-items: center;

 
 span {
    display: block;
    color: ${Colors.text.white};
    font-size: 15px;
    margin-top: 3px;
 }
`

export const CountDay = styled.h2`
   font-size: 30px;
   background: ${Colors.text.white};
   color: ${Colors.text.pink};
   width: 50px;
   height: 50px;
   border-radius: 10px;
    line-height: 50px;
    transition: all 0.4s;

    &:hover {
      border-bottom: 6px solid ${Colors.text.yellow} ;
    }
`

export const CountFlip = styled.div`
 display: block;
`



export const CountOne = styled.div<{ $flip: boolean } >` `