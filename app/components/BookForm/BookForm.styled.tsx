import { css, styled } from 'styled-components';

export const StyledContainer = styled.div``;

export const StyledContent = styled.div`
  padding: 71px 133px 91px 70px;
`;

export const StyledForm = styled.form``;

export const StyledHeading = styled.div`
  margin-bottom: 60px;

  p {
    font-size: 40px;
    font-weight: 700;
    line-height: 48px;
  }
`;

export const StyledFormContainer = styled.div``;

export const StyledInputContainer = styled.div`
  input {
    width: 100%;
  }
`;

export const StyledDateTimeText = styled.div`
  margin-bottom: 24px;

  p {
    font-size: 20px;
    font-weight: 700;
    line-height: 12px;
  }
`;

export const StyledError = styled.div`
  position: absolute;
  bottom: -25px;
  left: 14px;

  p {
    color: red;
    font-size: 14px;
  }
`;

export const StyledCheckboxesList = styled.ul<{
  $error?: string;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  border-radius: 4px;
  padding: 8px;
  transition: 0.3s;

  ${({ $error }) => $error
    && css`
      box-shadow: 0 0 4px 2px #ff0000a8;
    `}
`;

export const StyledCheckboxContainer = styled.div`
  margin-right: 22px;
`;

export const StyledLabelTextContainer = styled.div`
  p {
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0.05em;
  }
`;

export const StyledTextAreaContainer = styled.div`
  margin: 66px 0;

  textarea {
    width: 100%;
  }
`;

export const StyledInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledAddressContainer = styled.div`
  max-width: 151px;
  width: 100%;
`;

export const StyledButtonContainer = styled.div`
  text-align: center;

  button {
    width: 100%;
    max-width: 318px;
  }
`;
