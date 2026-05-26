import styled, { css, keyframes } from "styled-components";
import Colors from "../../theme/theme.colors";

type ButtonVariant = "primary" | "secondary" | "wats" | "cards" | "btnBanner";

type TextVariant = "textxl" | "text2x1"

interface ButtonProps {
  variant?: ButtonVariant;
  variantText?: TextVariant
}

const sweep = keyframes`
  from {
    left: 0;
  }
  to {
    left: 50%;
    opacity: 1;
  }
`

export const buttonVariants = {
  primary: css`
    position: relative;
    background: ${Colors.text.white};
    color: ${Colors.text.pink};
    overflow: hidden;
    z-index: 1;
  
    &::after {
      content: '';
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${Colors.text.yellow};
      border-radius: 30px;
      opacity: 0;
    }

    &:hover::after {
      animation: ${sweep} 0.6s ease forwards;
    }
  `,

  secondary: css`
    background: ${Colors.text.pink};
    color: ${Colors.text.white};
    transition: all 0.3s ease;
    display: inline-block;
    
    

    &:hover {
      background: ${Colors.text.gray};
      color: ${Colors.text.white};
    }
  `,

  wats: css`
    background: ${Colors.background.backgroundWats};
    color: ${Colors.text.gray};
    transition: all 0.3s ease;
    padding: 20px ;
    width: 64%;

    &:hover {
      box-shadow: 0px 0px 40px 10px rgba(0, 255, 70, 0.5);
      transform: scale(1.05);
    }
  `,

  cards: css`
    background: ${Colors.text.white};
    color: ${Colors.text.pink};
    border-radius: 10px;
    transition: all 0.3s ease;

    &:hover {
      background: ${Colors.input.placeholder};
    }
  `,

  btnBanner: css`
   background: ${Colors.text.pink};
   color: ${Colors.text.white};
   padding: 6px 40px;

    &:hover {
      /* background: #15803d; */
    }
  `,


};

export const buttonFontsVariants = {
  textxl: css`
   font-size: 18px;
  `,

  text2x1: css`
   font-size: 24px;
  `,
}

export const ButtonIcon = styled.div`
 span {
  display: flex;
  align-items: center;
  font-weight: bold;
  position: absolute;
  top: 6px;
  right: 32px;
  transform: rotate(316deg);
 }
`

export const ButtonNav = styled.button<ButtonProps>`
  position: relative;
  z-index: 10003;
  padding: 12px 40px;
  border-radius: 30px;
  border: none;
  text-decoration: none;
  font-weight: 400;
  overflow: hidden;
  cursor: pointer;
 

  display: flex;
  align-items: center;
  
  p {
    position: relative;
    z-index: 3;
    font-weight: 600;
  }

  h4 {
    font-weight: 400;
    color: ${Colors.text.buttonwaths};; 
    display: flex;
    align-items: center;
    gap: 3px;
    font-size: 18px;
    margin-left: 10px;
  }

i {
  position: relative;
  top: 0;
  right: -60px;
  z-index: 2;
  color: ${Colors.background.backgroundWatsIcon};
  border: 2px solid ${Colors.background.backgroundWatsIcon};
}

i::after {
  content: "";
  position: absolute;
  z-index: -1;
  top: -30px;
  right: -80px;
  background: ${Colors.background.backgroundIconWats};
  width: 130px;
  height: 83px;
}

  strong {
    font-weight: bold;
  }

   ${({ variant = "primary" }) => buttonVariants[variant as ButtonVariant]}

   ${({ variantText = "textxl" }) => buttonFontsVariants[variantText as TextVariant]}
`;