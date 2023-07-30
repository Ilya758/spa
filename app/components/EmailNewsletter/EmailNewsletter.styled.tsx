import { styled } from 'styled-components';

export const StyledContainer = styled.div`
  background: ${({
    theme: {
      colors: { white },
    },
  }) => white};
`;

export const StyledContent = styled.div`
  padding: 36px 0;
  text-align: center;
`;

export const StyledCardContent = styled.div`
  display: flex;
  padding: 86px 47px 110px 89px;
`;

export const StyledActionContainer = styled.div`
  max-width: 272px;
  width: 100%;
`;

export const StyledHeading = styled.div`
  margin-bottom: 18px;
  text-align: left;

  h4 {
    max-width: 202px;
  }
`;

export const StyledDiscountText = styled.div`
  margin-bottom: 23px;
  text-align: left;
`;

export const StyledEmailInputContainer = styled.div`
  margin-bottom: 33px;

  input {
    width: 100% !important;
  }
`;

export const StyledEmailConfirmationButton = styled.div`
  margin-bottom: 34px;

  button {
    width: 138px;
    height: 34px;
    padding: 0;

    p {
      color: inherit;
    }
  }
`;

export const StyledEmailConfirmationTipText = styled.div`
  p {
    margin: 0 auto;
    max-width: 231px;
    width: 100%;
    font-size: 14px;
  }
`;

export const StyledPictureContainer = styled.div`
  position: relative;
  margin-left: 82px;

  div {
    max-height: 430px;
    overflow: hidden;
  }
`;
