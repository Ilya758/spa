import { extractStyleColor } from '@/app/shared/utils';
import { css, keyframes, styled } from 'styled-components';

export const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const StyledPageContent = styled.div`
  padding: 69px 86px;
  text-align: center;
`;

export const StyledSearchContainer = styled.div`
  margin: 106px 0 167px;
`;

export const StyledPictureContainer = styled.div`
  background: ${extractStyleColor('cheek')};
`;

const blink = keyframes`
  0% {
    opacity: 1
  }

  50% {
    opacity: 0.5
  }

  100% {
    opacity: 1
  }
`;

export const StyledPictureContent = styled.div<{
  $isLoading: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 730px;

  ${({ $isLoading }) =>
    $isLoading &&
    css`
      animation: ${blink} 1s infinite;
    `}

  p {
    color: ${extractStyleColor('white')};
    font-size: 40px;
    font-weight: 700;
  }
`;

export const StyledPictureTitle = styled.div`
  margin: 40px 0 40px;

  p {
    font-weight: 700;
    font-size: 64px;
  }
`;

export const StyledInfoContainer = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 113px 0 0 25px;
  row-gap: 40px;

  p {
    text-align: left;
    font-weight: 700;
    font-size: 40px;
  }
`;
