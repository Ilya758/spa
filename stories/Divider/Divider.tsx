import { StyledDivider } from './Divider.styled';

export type DividerProps = {
  /**
   * Provide width you want apply to
   */
  width: number;
};

/**
 * Styled divider for visual composition
 */
export const Divider = ({ width }: DividerProps) => (
  <StyledDivider $width={width} />
);
