import { styled } from 'styled-components';

type StyledInputProps = {
  /**
   * Width of a textarea
   */
  $width?: number;

  /**
   * Height of a textarea
   */
  $height?: number;

  /**
   * Border-color you want provide to
   */
  $borderColor?: string;

  /**
   * Specifies whether textarea can be resized
   */
  $resizable?: boolean;
};

export const StyledTextArea = styled.div<StyledInputProps>`
  textarea {
    position: relative;
    width: ${({ $width }) => ($width ? `${$width}px` : 'initial')};
    height: ${({ $height }) => ($height ? `${$height}px` : 'initial')};
    border: 1px solid
      ${({
        $borderColor,
        theme: {
          colors: { secondary },
        },
      }) => ($borderColor ? $borderColor : secondary)};
    border-radius: 8px;
    padding: 13px 7px 13px 13px;
    color: ${({
      theme: {
        colors: { secondary },
      },
    }) => secondary};
    transition: 0.3s;

    ${({ $resizable }) => !$resizable && 'resize: none;'}

    &:hover {
      border-color: transparent;
      box-shadow: 0 0 10px 5px
        ${({
          theme: {
            colors: { pink },
          },
        }) => pink};
    }

    &:active {
      transform: scale(0.98) translate(0, 1px);
    }

    &:focus-visible {
      border-color: transparent;
      outline: transparent;
      box-shadow: 0 0 4px 2px
        ${({
          theme: {
            colors: { pink },
          },
        }) => pink};
    }
  }
`;