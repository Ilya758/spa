import { css, styled } from 'styled-components';

type StyledInputProps = {
  $error?: string;
  $width?: number;
  $height?: number;
  $borderColor?: string;
};

export const StyledInput = styled.div<StyledInputProps>`
  position: relative;

  input {
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
    transition: 0.2s;
    position: relative;

    ${({ $error }) =>
      !$error
        ? css`
            &:hover {
              border-color: transparent;
              box-shadow: 0 0 10px 2px
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
              box-shadow: 0 0 4px 2px
                ${({
                  theme: {
                    colors: { pink },
                  },
                }) => pink};
            }
          `
        : css`
            box-shadow: 0 0 4px 2px #ff0000a8;
            border-color: transparent;
          `}

    &:focus-visible {
      border-color: transparent;
      outline: transparent;
    }
`;

export const StyledError = styled.div`
  position: absolute;
  bottom: -25px;
  left: 14px;

  p {
    color: red;
    font-size: 14px;
  }
`;
