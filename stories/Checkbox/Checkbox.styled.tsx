import { styled } from 'styled-components';
// import CheckedIcon

type StyledCheckboxProps = {
  /**
   * Specifies whether checkbox is active or not
   */
  $checked?: boolean;
};

export const StyledCheckbox = styled.div<StyledCheckboxProps>`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  position: relative;

  ${({ $checked }) => ($checked ? 'overflow: hidden' : '')};

  input {
    // position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;

    &:checked {
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${({
          theme: {
            colors: { pink },
          },
        }) => pink};
      }
    }
  }
`;

export const StyledCheckboxCheckedIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
