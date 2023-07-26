import { styled } from 'styled-components';

export const StyledArticle = styled.div``;

export const StyledHeading = styled.div`
  margin-bottom: 29px;

  p {
    font-size: 36px;
    font-weight: 700;
    line-height: 44px;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 97px;
`;

export const StyledListItem = styled.li<{
  $reversed: boolean;
}>`
  display: flex;
  column-gap: 100px;

  div {
    &:first-child {
      order: ${({ $reversed }) => Number($reversed)};
    }
  }
`;

export const StyledText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 30px;
    font-weight: 500;
    line-height: 50px;
    text-align: center;
  }
`;
