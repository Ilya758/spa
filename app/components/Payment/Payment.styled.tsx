import { extractStyleColor } from '@/app/shared/extractStyleColor';
import { styled } from 'styled-components';

export const StyledContainer = styled.div`
  max-width: 444px;
  margin: 0 auto;
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledHeading = styled.div`
  margin-bottom: 16px;
  text-align: center;

  p {
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
  }
`;

export const StyledControlsContainer = styled.div`
  margin-bottom: 21px;

  input {
    width: 100%;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  column-gap: 18px;
  justify-content: center;
`;

export const StyledListItem = styled.li`
  display: flex;
  padding: 4px 5px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid ${extractStyleColor('borderColor')};
`;

export const StyledTipContainer = styled.div`
  margin: 21px 0 36px;
`;

export const StyledTipText = styled.div`
  text-align: center;

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
  }
`;

export const StyledButtonContainer = styled.div`
  text-align: center;

  button {
    width: 100%;
    max-width: 318px;
  }
`;
