import { styled } from 'styled-components';

export const StyledCard = styled.div`
  border: 4px solid
    ${({
      theme: {
        colors: { pink },
      },
    }) => pink};
`;
