import React from 'react';
import { StyledButton } from './Button.styled';

export type ButtonProps = {
  /**
   * Button content you want provide to
   */
  children: React.ReactNode;

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
  height,
  width,
  onClick,
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <StyledButton {...props} $height={height} $width={width} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
