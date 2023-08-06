import Link from 'next/link';
import {
  StyledActionContainer,
  StyledContainer,
  StyledContent,
  StyledFooterBody,
  StyledFooterCookies,
  StyledFooterInfo,
  StyledNavigationContainer,
  StyledOutline,
  StyledServicesContainer,
  StyledHeading,
  StyledServicesList,
  StyledEmailContainer,
  StyledSocialContainer,
  StyledSocialList,
  StyledCopyrightContainer,
  StyledTermsContainer,
  StyledTermsList,
} from './Footer.styled';
import {
  FOOTER_NAVIGATION_LINKS,
  FOOTER_PATHS,
  FOOTER_TERMS_LINKS,
  SOCIAL_LIST_BUTTONS,
} from './constants';
import { Text } from '../Text';
import { Input } from '../Input';
import { Button } from '../Button';
import { IconButton } from '../IconButton';
import { FooterLink } from '../FooterLink';
import { useTranslations } from 'next-intl';

export type FooterProps = {};

export const Footer = ({}: FooterProps) => {
  const t = useTranslations('Footer.Headings');
  const customerTranslations = useTranslations('Footer.CustomerLinks');
  const navigationTranslations = useTranslations('Footer.Navigation');
  const translateButtons = useTranslations('Common.Buttons.Text');
  const cookiesTranslations = useTranslations('Footer.Cookies');
  const copyTranslations = useTranslations('Footer.Copywright');
  const termsTranslations = useTranslations('Footer.Terms');

  return (
    <StyledContainer>
      <StyledOutline />
      <StyledContent>
        <StyledFooterBody>
          <StyledServicesContainer>
            <StyledHeading>
              <Text>{t('CustomerService')}</Text>
            </StyledHeading>
            <StyledServicesList>
              {FOOTER_PATHS.map(({ href, name }) => (
                <li key={`${href}-${name}`}>
                  <FooterLink color="charcoal" href={href}>
                    {customerTranslations(name)}
                  </FooterLink>
                </li>
              ))}
            </StyledServicesList>
          </StyledServicesContainer>
          <StyledActionContainer>
            <StyledHeading>
              <Text>{t('Subscribe')}</Text>
            </StyledHeading>
            <StyledEmailContainer>
              <Input placeholder="Email" type="email" />
              <Button height={40} width={129}>
                <Text>{translateButtons('Submit')}</Text>
              </Button>
            </StyledEmailContainer>
            <StyledSocialContainer>
              <StyledHeading>
                <Text>{t('Connect')}</Text>
              </StyledHeading>
              <StyledSocialList>
                {SOCIAL_LIST_BUTTONS.map(({ icon, href }) => (
                  <li key={`${href}`}>
                    <Link href={href}>
                      <IconButton icon={icon} />
                    </Link>
                  </li>
                ))}
              </StyledSocialList>
            </StyledSocialContainer>
          </StyledActionContainer>
          <StyledNavigationContainer>
            <StyledHeading>
              <Text>{t('Navigation')}</Text>
            </StyledHeading>
            <StyledServicesList>
              {FOOTER_NAVIGATION_LINKS.map(({ href, name }) => (
                <li key={`${href}-${name}`}>
                  <FooterLink color="charcoal" href={href}>
                    {navigationTranslations(name)}
                  </FooterLink>
                </li>
              ))}
            </StyledServicesList>
          </StyledNavigationContainer>
        </StyledFooterBody>
        <StyledFooterInfo>
          <StyledFooterCookies>
            <FooterLink color="charcoal" href={'./'}>
              {cookiesTranslations('Policy')}
            </FooterLink>
            <FooterLink color="charcoal" href={'./'}>
              {cookiesTranslations('Settings')}
            </FooterLink>
          </StyledFooterCookies>
          <StyledCopyrightContainer>
            <Text>{copyTranslations('Text')}</Text>
          </StyledCopyrightContainer>
          <StyledTermsContainer>
            <StyledTermsList>
              {FOOTER_TERMS_LINKS.map(({ href, name }) => (
                <li key={`${href}-${name}`}>
                  <FooterLink color="charcoal" href={href}>
                    {termsTranslations(name)}
                  </FooterLink>
                </li>
              ))}
            </StyledTermsList>
          </StyledTermsContainer>
        </StyledFooterInfo>
      </StyledContent>
    </StyledContainer>
  );
};
