import { css, keyframes, styled } from 'styled-components';

type StyledButtonProps = {
  $loading?: boolean;
  $width?: number;
  $height?: number;
};

const Loading = keyframes`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.2;
  }

  100% {
    opacity: 1;
  }
`;

export const StyledButton = styled.button<StyledButtonProps>`
  width: ${({ $width }) => ($width ? `${$width}px` : 'initial')};
  height: ${({ $height }) => ($height ? `${$height}px` : 'initial')};
  outline: none;
  border: none;
  background: ${({
    theme: {
      colors: { pink },
    },
  }) => pink};
  color: ${({
    theme: {
      colors: { white },
    },
  }) => white};
  border-radius: 20px;
  transition: 0.3s;
  cursor: pointer;
  text-align: center;
  padding: 8px;
  cursor: pointer;
  border: 2px solid transparent;

  ${({ $loading }) =>
    !$loading &&
    css`
      &:hover {
        color: ${({
          theme: {
            colors: { pink },
          },
        }) => pink};
        background: initial;
        border-color: ${({
          theme: {
            colors: { pink },
          },
        }) => pink};
      }

      &:active {
        transform: translate(0, 2px);
        opacity: 0.4;
      }
    `}

  ${({ $loading }) =>
    $loading &&
    css`
      animation: ${Loading} 1s infinite;
      cursor: not-allowed;
    `}
`;
