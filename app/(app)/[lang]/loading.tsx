'use client';

import { extractStyleColor } from '@/app/shared/utils';
import { keyframes, styled } from 'styled-components';

export const scale = keyframes`
  0% {
    transform: scale(1);
    border-radius: 50%;
  }

  50% {
    transform: scale(1.5);
    opacity: 0.5;
    border-radius: 20%;
  }

  100% {
    transform: scale(1);
    border-radius: 50%;
  }
`;

export const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledSpinner = styled.div`
  width: 50px;
  height: 50px;
  animation: 2s ${scale} infinite;
  background-color: ${extractStyleColor('pink')};
  border-radius: 50%;
`;

export default function Loading() {
  return (
    <StyledLoading>
      <StyledSpinner />
    </StyledLoading>
  );
}
