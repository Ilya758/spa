import { css, styled } from 'styled-components';

export const StyledContainer = styled.div<{
  $isLoading: boolean;
}>`
  display: flex;
  flex-direction: column;
  height: 100%;

  ${({ $isLoading }) =>
    $isLoading &&
    css`
      justify-content: center;
      align-items: center;
    `}
`;

export const StyledMain = styled.main`
  flex: 1;
`;
