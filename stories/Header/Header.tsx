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
import Link from 'next/link';
import { Text } from '../Text';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import { extractPath } from './helpers';

export type HeaderProps = {};

export const Header = ({}: HeaderProps) => {
  const t = useTranslations('Header.Links');
  const path = extractPath(usePathname() || 'en-US');

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
          <HeaderLink color="charcoal" href={`../en-US${path}`}>
            <Text>EN</Text>
          </HeaderLink>
          <HeaderLink color="charcoal" href={`../ru-RU${path}`}>
            <Text>RU</Text>
          </HeaderLink>
        </StyledHeaderLinkList>
      </StyledContent>
    </StyledContainer>
  );
};
