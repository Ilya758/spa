import { cormorantFont } from '@/app/shared/fonts';
import { StyledInput } from './Input.styled';
import { HTMLInputTypeAttribute } from 'react';

export type InputProps = {
  /**
   * Border-color you want provide to
   */
  borderColor?: string;

  /**
   * Placeholder text you want apply to
   */
  placeholder?: string;

  /**
   * Provided type of a textbox. Default: text
   */
  type?: HTMLInputTypeAttribute;

  /**
   * Value you want provide to
   */
  value?: string;

  /**
   * Width of a textbox
   */
  width?: number;

  /**
   * Height of a textbox
   */
  height?: number;

  /**
   * Optional onChange event-handler
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

/**
 * Basic UI-textbox for user input.
 */
export const Input = ({
  borderColor,
  height,
  placeholder,
  type = 'text',
  value,
  width,
  onChange,
}: InputProps) => (
  <StyledInput $borderColor={borderColor} $height={height} $width={width}>
    <input
      type={type}
      className={cormorantFont.className}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  </StyledInput>
);
