import React from 'react';
import { StyledIconButton } from './IconButton.styled';

export type IconButtonProps = {
  /**
   * Data-atribute for querying in testing
   */
  data_cy?: string;

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
  data_cy,
  icon,
  height,
  width,
  onClick,
}: IconButtonProps) => {
  return (
    <StyledIconButton
      data-cy={data_cy}
      onClick={onClick}
      $height={height}
      $width={width}
      type="button"
    >
      {icon}
    </StyledIconButton>
  );
};
