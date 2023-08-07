import React from 'react';
import { StyledButton } from './Button.styled';

export type ButtonProps = {
  /**
   * Data-atribute for querying in testing
   */
  data_cy?: string;

  /**
   * Button content you want provide to
   */
  children: React.ReactNode;

  /**
   * Indicates that the button is in loading state
   */
  loading?: boolean;

  /**
   * Width of a button
   */
  width?: number;

  /**
   * Height of a button
   */
  height?: number;

  /**
   * Optional click event-handler
   */
  onClick?: () => void;
};

/**
 * Represents a simple button for user interactions
 */
export const Button = ({
  children,
  data_cy,
  loading,
  height,
  width,
  onClick,
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <StyledButton
      {...props}
      data-cy={data_cy}
      $loading={loading}
      $height={height}
      $width={width}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};
