import { extractStyleColor } from '@/app/shared/extractStyleColor';
import { styled } from 'styled-components';

type StyledDividerProps = {
  $width: number;
};

export const StyledDivider = styled.div<StyledDividerProps>`
  margin: 0 auto;
  height: 2px;
  background: ${extractStyleColor('charcoal')};
  width: ${({ $width }) => `${$width}px`};
`;
