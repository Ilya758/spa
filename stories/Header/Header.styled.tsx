import { styled } from 'styled-components';

export const StyledContainer = styled.header``;

export const StyledContent = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin: 34px 0;
`;

export const StyledLogo = styled.div`
  position: absolute;
  left: 0;
  transform: translate(0, -15%);
`;

export const StyledHeaderLinkList = styled.ul`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  column-gap: 58px;
  margin-left: 152px;
  max-width: 80%;

  li {
    list-style: none;
  }
`;
