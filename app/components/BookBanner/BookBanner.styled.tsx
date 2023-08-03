import { extractStyleColor } from '@/app/shared/utils';
import { styled } from 'styled-components';

export const StyledContainer = styled.div``;

export const StyledContent = styled.div``;

export const StyledBannerContainer = styled.div`
  position: relative;

  img {
    position: relative !important;
    object-fit: contain !important;
    width: 100%;
  }
`;

export const StyledText = styled.div`
  position: absolute;
  top: 97px;
  left: 110px;

  p {
    font-size: 70px;
    font-weight: 700;
    line-height: 85px;
    color: ${extractStyleColor('white')};
    max-width: 478px;
  }
`;
