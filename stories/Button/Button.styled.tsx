import { styled } from 'styled-components';

type StyledButtonProps = {
  $width?: number;
  $height?: number;
};

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
`;
