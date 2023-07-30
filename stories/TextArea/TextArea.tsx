import { cormorantFont } from '@/app/shared/fonts';
import { StyledError, StyledTextArea } from './TextArea.styled';
import { Text } from '../Text/Text';

export type TextAreaProps = {
  /**
   * Border-color you want provide to
   */
  borderColor?: string;

  /**
   * Disable all manipulation with control
   */
  disabled?: boolean;

  /**
   * Name of control
   */
  name?: string;

  /**
   * Error, representing current state of a control
   */
  error?: string;

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
   * Placeholder you can provide to
   */
  placeholder?: string;

  /**
   * Specifies whether textarea can be resized
   */
  resizable?: boolean;

  /**
   * Optional onChange event-handler
   */
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

/**
 * Basic UI-textarea for user input.
 */
export const TextArea = ({
  borderColor,
  disabled,
  error,
  height,
  placeholder,
  name,
  resizable = false,
  value,
  width,
  onChange,
}: TextAreaProps) => (
  <StyledTextArea
    $borderColor={borderColor}
    $disabled={disabled}
    $error={error}
    $height={height}
    $resizable={resizable}
    $width={width}
  >
    <>
      <textarea
        className={cormorantFont.className}
        disabled={disabled}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
      {error && (
        <StyledError>
          <Text>{error}</Text>
        </StyledError>
      )}
    </>
  </StyledTextArea>
);
