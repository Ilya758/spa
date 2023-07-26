import { styled } from 'styled-components';

export const StyledDiscountContainer = styled.div`
  background: ${({
    theme: {
      colors: { light },
    },
  }) => light};
`;

export const StyledDiscountContent = styled.div`
  text-align: center;
  padding: 12px 0 8px;

  p {
    font-weight: 700;
  }
`;
