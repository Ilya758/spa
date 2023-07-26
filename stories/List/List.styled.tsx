import { styled } from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const StyledListItemText = styled.div`
  margin: 57px 0 16px;

  p {
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
  }
`;

export const StyledListItemPrice = styled.div`
  p {
    font-size: 30px;
    line-height: 36px;
    font-weight: 700;
  }
`;
