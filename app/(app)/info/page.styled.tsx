import { extractStyleColor } from '@/app/shared/utils';
import { styled } from 'styled-components';

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

export const StyledPictureContent = styled.div`
  height: 730px;
`;
