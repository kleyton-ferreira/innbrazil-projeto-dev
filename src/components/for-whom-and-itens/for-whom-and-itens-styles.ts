import styled, { keyframes } from "styled-components";
import Colors from "../../theme/theme.colors";

export const ForWhowItensContainer = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 gap: 80px;
`

export const ForWhowItensContentImg = styled.div`
 position: relative;
`

export const ForWhowItensImage = styled.div`

img {
 width: 100%;
 height: 100%;
 object-fit: cover;
 }
`

export const ForWhowItensBtn = styled.div`
 position: absolute;
 top: 52%;
 left: 70%;
`

const pulseAnimation = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(255, 0, 128, 0.25);
  }
  50% {
    box-shadow: 0 0 0 25px rgba(255, 0, 128, 0.3);
  }
  100% {
    box-shadow: 0 0 0 50px rgba(255, 0, 128, 0);
  }
`;

export const PlayButton = styled.button`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  border: none;
  background: ${Colors.text.white};
  cursor: pointer;
  animation: ${pulseAnimation} 2.5s ease-out infinite;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 145px;
    height: 145px;
    object-fit: cover;
  }
`;

export const ForWhowItensContent = styled.div`
 display: flex;
 flex-direction: column;
 gap: 16px;
`

export const ForWhowItensText = styled.div`
 color: ${Colors.text.gray};

 h2 {
    font-size: 38px;
    font-weight: 300;
 }

 span {
   display: block;
   font-weight: bold;
 }
`

export const ForWhowItensDesc = styled.div`
 color: ${Colors.text.gray};

 p {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 4px;
 }

 p:nth-child(5) {
  margin-top: 40px;
 }

 strong {
  font-weight: bold;
 }

 span {
   display: block;
   
 }
`

export const ForWhowItensButton = styled.div`
 margin-top: 30px;
`