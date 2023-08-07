import { styled } from 'styled-components';

export const StyledCard = styled.div`
  overflow: hidden;
  border: 4px solid
    ${({
      theme: {
        colors: { pink },
      },
    }) => pink};
`;
