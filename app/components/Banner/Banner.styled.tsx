import { styled } from 'styled-components';

export const StyledBannerContainer = styled.div`
  position: relative;
  flex: 1;
`;

export const StyledBanner = styled.div`
  height: 100%;

  img {
    position: relative !important;
    width: 100%;
  }
`;

export const StyledFloatableContainer = styled.div`
  position: absolute;
  top: 134px;
  left: 61px;

  p {
    text-align: center;
    max-width: 490px;
    font-size: 63px;
    line-height: 85px;
    font-weight: 700;

    &:first-child {
      margin-bottom: 39px;
    }
  }
`;

export const StyledButtonContainer = styled.div`
  margin-top: 81px;
  text-align: center;

  button {
    width: 210px;
    height: 50px;
  }

  a {
    font-size: 21px;
    text-decoration: none;
    color: inherit;
  }
`;
