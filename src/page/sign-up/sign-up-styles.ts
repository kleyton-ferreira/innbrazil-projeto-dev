import styled from 'styled-components'
import Colors from '../../theme/theme.colors'

export const SignUpContainerFlex = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
`

export const SignUpBg = styled.div`
 position: relative;
 z-index: 1;
 width: 100%;
 height: 100vh;
 
background: linear-gradient(
    135deg,
    #fce4f3,
    #f9b8dc,
    #e47cb0,
    #f472b6,
    #fda4d0,
rgb(247, 128, 193),
    #fce4f3
  );
  background-size: 400% 400%;
  animation: moveGrad 8s ease infinite;


@keyframes moveGrad {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
`

export const SignUpContainer = styled.div`
  position: relative;
  top: -200px;
  z-index: 2;
  width: 580px;
  height: 100%;
  padding: 60px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  transform:  translate(0%, 60%);
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(3px);
  border-radius: 20px;
  transition: all 0.4s ease;
  transition: all 0.5s cubic-bezier(.43, 2, .55, .27);
  overflow: hidden;
  
  box-shadow:
  0 2px 8px rgba(228, 124, 176, 0.10),
  0 8px 24px rgba(230, 0, 126, 0.08),
  0 16px 40px rgba(250, 128, 114, 0.06);

  &:hover {
  transform: translate(0%, 60%) translateY(-8px);
    box-shadow:
      0 4px 20px rgba(228, 124, 176, 0.18),
      0 12px 40px rgba(230, 0, 126, 0.14),
      0 24px 60px rgba(250, 128, 114, 0.10);
  }
`

export const SignUpHeadLine = styled.p`
  font-weight: 600;
  font-size: 1.3rem;
  margin-bottom: 20px;
  color: ${Colors.text.gray};
  border-bottom: 1px solid transparent;
  border-image: linear-gradient(to right, transparent, ${Colors.text.gray}, transparent) 1;
  padding-bottom: 3px;
`

export const SignUpContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
`

export const SignUpSubtitle = styled.p`
  color: ${Colors.text.gray};
  padding-bottom: 20px;
 
  width: 100%;
  margin-top: 20px;
  text-align: center;
  font-weight: 500;
  margin-bottom: 20px;
`

export const SignUpInputContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;

  p {
    color: ${Colors.text.gray};
    position: relative;
    left: 4px;
  }

  & p:nth-child(1) {
    font-weight: 600;
    margin-bottom: 5px;
  }
`