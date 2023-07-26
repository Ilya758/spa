import { DefaultTheme, styled } from 'styled-components';

type StyledFooterLinkProps = {
  color: keyof DefaultTheme['colors'];
};

export const StyledFooterLink = styled.div<StyledFooterLinkProps>`
  font-size: 26px;

  a {
    position: relative;
    font-weight: 700;
    line-height: 31px;
    color: ${({ theme: { colors }, color }) => colors[color]};
    letter-spacing: 0em;
    transition: 0.3s;

    p {
      font-size: 26px;
    }

    &:hover {
      color: ${({
        theme: {
          colors: { white },
        },
      }) => white};

      &::before {
        position: absolute;
        content: '';
        bottom: -8px;
        height: 6px;
        width: 100%;
        border-radius: 4px;
        background-color: ${({
          theme: {
            colors: { pink },
          },
        }) => pink};
      }
    }
  }
`;
