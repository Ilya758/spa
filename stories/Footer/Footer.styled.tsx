import { styled } from 'styled-components';

export const StyledContainer = styled.footer`
  background: ${({
    theme: {
      colors: { pink },
    },
  }) => pink};
`;

export const StyledHeading = styled.div`
  p {
    font-size: 32px;
    margin-bottom: 25px;
    font-weight: 700;
  }
`;

export const StyledOutline = styled.div`
  height: 12px;
  background: ${({
    theme: {
      colors: { pink },
    },
  }) => pink};
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  margin: 11px 0 7px 0;
`;

export const StyledFooterBody = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 58px 26px 84px;
  background: ${({
    theme: {
      colors: { light },
    },
  }) => light};
`;

export const StyledServicesContainer = styled.div``;

export const StyledServicesList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  li {
    list-style: none;
  }
`;

export const StyledActionContainer = styled.div`
  flex: 1;
  max-width: 650px;
  padding: 0 20px;
`;

export const StyledEmailContainer = styled.div`
  display: flex;
  margin-bottom: 66px;
  align-items: center;
  column-gap: 29px;
  width: 100%;

  p {
    color: inherit;
  }

  div:first-child {
    flex: 1;
  }

  input {
    max-width: 500px;
    width: 100% !important;
  }
`;

export const StyledSocialContainer = styled.div`
  width: 100%;
  max-width: 450px;
`;

export const StyledSocialList = styled.ul`
  display: flex;
  justify-content: space-around;

  li {
    list-style: none;
  }
`;

export const StyledNavigationContainer = styled.div``;

export const StyledFooterInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 26px;

  p {
    font-size: 22px !important;
  }
`;

export const StyledFooterCookies = styled.div`
  display: flex;
  column-gap: 33px;
`;

export const StyledCopyrightContainer = styled.div``;

export const StyledTermsContainer = styled.div``;

export const StyledTermsList = styled.ul`
  display: flex;
  column-gap: 20px;

  li {
    list-style: none;
  }
`;
