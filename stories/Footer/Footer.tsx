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
import { useForm } from '@/app/shared/hooks';
import { IEmailNewsletterSchema } from '@/app/components/EmailNewsletter/models';
import {
  EMAIL_SCHEMA,
  INITIAL_FORM_STATE,
} from '@/app/components/EmailNewsletter/constants';
import { EmailService } from '@/app/shared/services';
import { useRef } from 'react';

export type FooterProps = {};

export const Footer = ({}: FooterProps) => {
  const t = useTranslations('Footer.Headings');
  const errorTranslations = useTranslations('Common.Inputs.Errors');
  const inputTranslations = useTranslations('Common.Inputs.Placeholders');
  const customerTranslations = useTranslations('Footer.CustomerLinks');
  const navigationTranslations = useTranslations('Footer.Navigation');
  const translateButtons = useTranslations('Common.Buttons.Text');
  const cookiesTranslations = useTranslations('Footer.Cookies');
  const copyTranslations = useTranslations('Footer.Copywright');
  const termsTranslations = useTranslations('Footer.Terms');
  const { errors, fields, isSubmitting, handleChangeValue, handleSubmitForm } =
    useForm<IEmailNewsletterSchema>(INITIAL_FORM_STATE);
  const { email } = fields;
  const form = useRef<HTMLFormElement>(null);

  const handleChangeEmail = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>): void => {
    handleChangeValue('email', value);
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    handleSubmitForm({
      validationSchema: EMAIL_SCHEMA,
      fields,
      onSuccess: async () => {
        if (form.current) {
          await EmailService.sendEmail(form.current, 'registration');
        }
      },
    });
  };

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
              <form ref={form} onSubmit={handleSubmit}>
                <Input
                  disabled={isSubmitting}
                  error={errors.email && errorTranslations(errors.email)}
                  name="email"
                  onChange={handleChangeEmail}
                  placeholder={inputTranslations('Email')}
                  value={email}
                />
                <Button
                  height={40}
                  width={129}
                  loading={isSubmitting}
                  type="submit"
                >
                  <Text>{translateButtons('Submit')}</Text>
                </Button>
              </form>
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
