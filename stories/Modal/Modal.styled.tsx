import { extractStyleColor } from '@/app/shared/utils';
import { styled } from 'styled-components';

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const StyledModalContent = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  left: 50%;
  top: 50%;
  border-radius: 8px;
  background: ${extractStyleColor('white')};
  transform: translate(-50%, -50%);
`;

export const StyledCloseButtonContainer = styled.div`
  position: absolute;
  top: 4px;
  right: 6px;
  height: 20px;
  width: 20px;

  &::before,
  &::after {
    position: absolute;
    top: 50%;
    right: 0;
    content: '';
    display: block;
    width: 20px;
    height: 2px;
    background: ${extractStyleColor('charcoal')};
    transition: 0.3s;
  }

  &::before {
    transform: rotate(45deg) translate(0);
  }

  &::after {
    transform: rotate(135deg) translate(0);
  }

  &:hover {
    cursor: pointer;

    &::before,
    &::after {
      background: ${extractStyleColor('pink')};
    }
  }

  &:active {
    &::before,
    &::after {
      transform: scale(0.8);
    }
  }
`;
