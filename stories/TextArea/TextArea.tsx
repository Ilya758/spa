import { cormorantFont } from '@/app/shared/fonts';
import { StyledTextArea } from './TextArea.styled';

export type TextAreaProps = {
  /**
   * Border-color you want provide to
   */
  borderColor?: string;

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
  height,
  placeholder,
  resizable = false,
  value,
  width,
  onChange,
}: TextAreaProps) => (
  <StyledTextArea
    $borderColor={borderColor}
    $height={height}
    $resizable={resizable}
    $width={width}
  >
    <textarea
      className={cormorantFont.className}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  </StyledTextArea>
);
