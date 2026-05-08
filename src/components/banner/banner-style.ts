import styled from "styled-components";
import Colors from "../../theme/theme.colors";

// // SCRIPT and IMAGES 
import { Images } from "../../scripts/scriptsImg"

export const BannerContainer = styled.div`
 position: relative;
 top: 92px;
 width: 100%;
 height: 806px;
 background: url(${Images.bg});
 background-repeat: no-repeat;
 background-position: center;
 background-size: cover;
 overflow: hidden;

 &::before {
  content: '';
  position: absolute;
  top: 0%;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 806px;
  background-size: cover;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, #000000 100%);
  z-index: 2;
}
`