import styled from "styled-components";
import Colors from "../../theme/theme.colors";

export const BannerItensContainer = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 position: relative;
`

export const BannerItensImg = styled.div`
 margin-top: 20px;

 img {
  width: 716px;
  height: 820px;
  object-fit: contain;
 }
`

export const BannerItensContent = styled.div`
 position: absolute;
 z-index: 1003;
 bottom: 50%;
 transform: translateY(106%);
`

export const BannerItensButton = styled.div`
 display: flex;
 gap: 10px;
 justify-content: center;
 margin-bottom: 16px;
`

export const BannerItensText = styled.div`
 text-align: center;
 margin-bottom: 16px;
 h2 {
    color: ${Colors.text.white};
    font-size: 72px;
    line-height: 72px;
 }

 span {
    display: block;
 }
`

export const BannerItensTitle = styled.div`
 text-align: center;
 h2 {
     color: ${Colors.text.white};
     font-size: 20px;
     line-height: 24px;
     font-weight: 200;
     margin-bottom: 20px;
 }

 span {
    display: block;
 }
`

export const BannerItensButtonFooter = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`