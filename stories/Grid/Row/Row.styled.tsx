import { styled } from 'styled-components';

export const StyledRow = styled.div<{
  $gutter: [number, number] | number;
}>`
  display: flex;
  flex-flow: row wrap;
  min-width: 0;

  ${({ $gutter }) =>
    typeof $gutter === 'number'
      ? `gap: ${$gutter}px`
      : `row-gap: ${$gutter[0]}px; column-gap: ${$gutter[1]}px;`}
`;
