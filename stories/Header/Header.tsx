import { useTranslations } from 'next-intl';
import { HeaderLink } from '../HeaderLink';
import { Logo } from '../Logo';
import {
  StyledContainer,
  StyledContent,
  StyledHeaderLinkList,
  StyledLogo,
} from './Header.styled';
import { PATHS } from './constants';

export type HeaderProps = {};

export const Header = ({}: HeaderProps) => {
  const t = useTranslations('Header.Links');

  return (
    <StyledContainer>
      <StyledContent>
        <StyledLogo>
          <Logo />
        </StyledLogo>
        <StyledHeaderLinkList>
          {PATHS.map(({ href, name }) => (
            <li key={href}>
              <HeaderLink color="charcoal" href={href}>
                {t(name)}
              </HeaderLink>
            </li>
          ))}
        </StyledHeaderLinkList>
      </StyledContent>
    </StyledContainer>
  );
};
