import { cormorantFont } from '@/app/shared/fonts';
import { StyledError, StyledInput } from './Input.styled';
import { HTMLInputTypeAttribute } from 'react';
import { Text } from '../Text';

export type InputProps = {
  /**
   * Border-color you want provide to
   */
  borderColor?: string;

  /**
   * Error, representing current state of a control
   */
  error?: string;

  /**
   * Placeholder text you want apply to
   */
  placeholder?: string;

  /**
   * Name of control
   */
  name?: string;

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
  error,
  height,
  placeholder,
  name,
  type = 'text',
  value,
  width,
  onChange,
}: InputProps) => (
  <StyledInput
    $error={error}
    $borderColor={borderColor}
    $height={height}
    $width={width}
  >
    <input
      name={name}
      type={type}
      className={cormorantFont.className}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
    {error && (
      <StyledError>
        <Text>{error}</Text>
      </StyledError>
    )}
  </StyledInput>
);
