import { styled } from 'styled-components';

export const StyledCol = styled.div<{
  $span: number;
  $gutter?: number;
  $colsCount: number;
  $gapsCount: number;
}>`
  flex-basis: calc(
    100% / ${({ $colsCount }) => $colsCount} -
      (
        ${({ $gutter }) => $gutter}px * ${({ $gapsCount }) => $gapsCount} /
          ${({ $colsCount }) => $colsCount}
      )
  );
`;
