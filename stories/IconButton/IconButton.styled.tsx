import { styled } from 'styled-components';

type StyledIconButtonProps = {
  $width?: number;
  $height?: number;
};

export const StyledIconButton = styled.button<StyledIconButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $width }) => ($width ? `${$width}px` : 'initial')};
  height: ${({ $height }) => ($height ? `${$height}px` : 'initial')};
  background: none;
  border: 1px solid transparent;
  border-radius: 4px;
  transition: 0.3s;
  cursor: pointer;
  padding: 8px;

  svg {
    path {
      transition: 0.3s;
    }
  }

  &:hover {
    border: 1px solid
      ${({
        theme: {
          colors: { pink },
        },
      }) => pink};

    svg {
      path {
        fill: ${({
          theme: {
            colors: { pink },
          },
        }) => pink};
      }
    }
  }

  &:active {
    transform: translate(0, 2px);
    opacity: 0.4;
  }
`;
