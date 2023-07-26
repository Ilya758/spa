import { styled } from 'styled-components';

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 35px;
    line-height: 42px;
  }
`;

export const StyledHeading = styled.div`
  margin-bottom: 25px;

  p {
    font-weight: 700;
  }
`;

export const StyledText = styled.div<{
  $textWidth: number;
}>`
  width: ${({ $textWidth }) => $textWidth}%;
`;
