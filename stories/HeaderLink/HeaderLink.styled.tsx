import { DefaultTheme, styled } from 'styled-components';

type StyledHeaderLinkProps = {
  color: keyof DefaultTheme['colors'];
};

export const StyledHeaderLink = styled.div<StyledHeaderLinkProps>`
  a {
    position: relative;
    font-size: 26px;
    font-weight: 700;
    line-height: 31px;
    color: ${({ theme: { colors }, color }) => colors[color]};
    letter-spacing: 0em;
    transition: 0.3s;
    opacity: 0.6;

    &:hover {
      opacity: 1;

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
