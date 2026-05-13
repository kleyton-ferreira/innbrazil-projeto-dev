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
    

    &:hover {
      background: ${Colors.text.white};
      color: ${Colors.text.pink};
    }
  `,

  wats: css`
    background: ${Colors.background.backgroundWats};
    color: ${Colors.text.gray};
    transition: all 0.3s ease;

    &:hover {
      /* background: #b91c1c; */
    }
  `,

  cards: css`
    background: ${Colors.text.white};
    color: ${Colors.text.pink};

    &:hover {
      /* background: #15803d; */
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
  position: relative;
  top: -1px;
  left: -6px;
 }
`

export const ButtonNav = styled.div<ButtonProps>`
  position: relative;
  z-index: 10003;
  padding: 12px 40px;
  border-radius: 30px;
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

   ${({ variant = "primary" }) => buttonVariants[variant as ButtonVariant]}

   ${({ variantText = "textxl" }) => buttonFontsVariants[variantText as TextVariant]}
`;