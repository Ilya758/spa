import React from 'react';
import { StyledCard } from './Card.styled';

export type CardProps = {
  /**
   * External className you want provide to
   */
  className?: string;

  /**
   * Custom Element/text as a label
   */
  children?: React.ReactNode;

  /**
   * Custom inline styles
   */
  style?: React.CSSProperties;
};

export const Card = ({ children, className, style }: CardProps) => {
  return (
    <StyledCard className={className} style={style}>
      {children}
    </StyledCard>
  );
};
