import React from 'react';
import { StyledRow } from './Row.styled';

export type RowProps = {
  /**
   * Columns, you want to render
   */
  children: JSX.Element[] | JSX.Element;

  /**
   * The empty space between grid cells
   */
  gutter: [number, number] | number;

  /**
   * Custom props you want provide to
   */
  style?: React.CSSProperties;
};

/**
 * Grid row. Recommend to use in any type of a form grid
 */
export const Row = ({ children, gutter, style }: RowProps) => {
  return (
    <StyledRow style={style} $gutter={gutter}>
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          $gutter: typeof gutter === 'object' ? gutter[1] : gutter,
          $colsCount: 24 / child.props.span,
          $gapsCount: 24 / child.props.span - 1,
        })
      )}
    </StyledRow>
  );
};
