import styled from "styled-components";
import Colors from "../../theme/theme.colors";

export const ConfirmedCardsContainer = styled.div`
  margin-top: 70px;
`

export const ConfirmedCardsItens = styled.div`
 position: relative;
 width: 280px;
 height: 420px;
 background: ${Colors.background.backgroundPink};
 border-radius: 20px;
 overflow: hidden;
 transition: all 0.5s ease; 

 &:hover {
  transform: scale(1.05);
 }

 &::after {
    content: '';
    position: absolute;
    inset: 0; 
    background: ${Colors.background.backgroundPink};
    opacity: 0;
    transition: opacity 0.5s ease; 
    z-index: 1; 
  }

  &:hover::after {
    opacity: 0.6; 
  }

  &::before {
  content: '';
  position: absolute;
  top: 0%;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, #000000 122%);
  z-index: 2;
}
  
 p {
    position: absolute;
    z-index: 3;
    top: 84%;
    left: 30px;
    color: ${Colors.text.white};
    font-size: 20px;
    font-weight: 500;
 }

 p::after {
   content: "";
   position: absolute;
   top: 0;
   left: -10px;
   width: 2px;
   height: 20px;
   background: ${Colors.text.pinkLight};
   transition: height 0.4s ease;
 }

 &:hover p::after {
    height: 36px; 
    top: 4px;
  }
 

 span {
    font-size: 16px;
    font-weight: 300;
    display: block;
    text-align: left;
 }

 img {
    width: 100%;
    height: 100%;
    object-fit: cover;
 }
`