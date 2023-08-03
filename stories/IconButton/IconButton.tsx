import React from 'react';
import { StyledIconButton } from './IconButton.styled';

export type IconButtonProps = {
  /**
   * Custom icon
   */
  icon: React.ReactNode;

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
 * Icon-button, that's a part of a datepicker.
 */
export const IconButton = ({
  icon,
  height,
  width,
  onClick,
}: IconButtonProps) => {
  return (
    <StyledIconButton
      onClick={onClick}
      $height={height}
      $width={width}
      type="button"
    >
      {icon}
    </StyledIconButton>
  );
};
