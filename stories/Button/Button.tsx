import React from 'react';
import { StyledButton } from './Button.styled';

export type ButtonProps = {
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

export const Button = ({
  children,
  loading,
  height,
  width,
  onClick,
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <StyledButton
      {...props}
      $loading={loading}
      $height={height}
      $width={width}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};
