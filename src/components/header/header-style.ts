import styled from "styled-components";

interface HeaderContainerProps {
    scrolled?: boolean
}

export const HeaderContainer = styled.div<HeaderContainerProps>`
 position: fixed;
 z-index: 9999;
 width: 100%;
 background: linear-gradient(270deg, #f489b5 3.49%, #ea005f 47.49%, #ea0063 94.22% ); 
 transition: box-shadow 0.3s ease;

 box-shadow: ${({ scrolled }) =>
        scrolled ? '0px 4px 20px rgba(0, 0, 0, 0.5)' : 'none'};
`

export const HeaderContent = styled.div`
 padding: 10px 130px;
`
