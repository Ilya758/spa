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
import { cormorantFont } from '@/app/shared/fonts';
import { Text } from '../Text';
import { Input } from '../Input';
import { Button } from '../Button';
import { IconButton } from '../IconButton';
import { FooterLink } from '../FooterLink';

export type FooterProps = {};

export const Footer = ({}: FooterProps) => {
  return (
    <StyledContainer>
      <StyledOutline />
      <StyledContent>
        <StyledFooterBody>
          <StyledServicesContainer>
            <StyledHeading>
              <Text>Customer Service</Text>
            </StyledHeading>
            <StyledServicesList>
              {FOOTER_PATHS.map(({ href, name }) => (
                <li key={`${href}-${name}`}>
                  <FooterLink color="charcoal" href={href}>
                    {name}
                  </FooterLink>
                </li>
              ))}
            </StyledServicesList>
          </StyledServicesContainer>
          <StyledActionContainer>
            <StyledHeading>
              <Text>Subscribe to our Newsletter</Text>
            </StyledHeading>
            <StyledEmailContainer>
              <Input placeholder="Email" type="email" />
              <Button height={40} width={129}>
                Submit
              </Button>
            </StyledEmailContainer>
            <StyledSocialContainer>
              <StyledHeading>
                <Text>Connect With Us On Social Media</Text>
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
              <Text>Navigation</Text>
            </StyledHeading>
            <StyledServicesList>
              {FOOTER_NAVIGATION_LINKS.map(({ href, name }) => (
                <li key={`${href}-${name}`}>
                  <FooterLink color="charcoal" href={href}>
                    {name}
                  </FooterLink>
                </li>
              ))}
            </StyledServicesList>
          </StyledNavigationContainer>
        </StyledFooterBody>
        <StyledFooterInfo>
          <StyledFooterCookies>
            <FooterLink color="charcoal" href={'./'}>
              Cookie policy
            </FooterLink>
            <FooterLink color="charcoal" href={'./'}>
              Cookies Settings
            </FooterLink>
          </StyledFooterCookies>
          <StyledCopyrightContainer>
            <Text>
              Copyright 2021 Luxe Animal Spa, LLC. All rights reserved.
            </Text>
          </StyledCopyrightContainer>
          <StyledTermsContainer>
            <StyledTermsList>
              {FOOTER_TERMS_LINKS.map(({ href, name }) => (
                <li key={`${href}-${name}`}>
                  <FooterLink color="charcoal" href={href}>
                    {name}
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
