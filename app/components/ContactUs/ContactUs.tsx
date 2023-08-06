import { Divider } from '@/stories/Divider';
import { Text } from '@/stories/Text';
import Link from 'next/link';
import { ContactForm } from '@/stories/ContactForm';
import {
  StyledContainer,
  StyledContent,
  StyledFormContainer,
  StyledHeading,
  StyledText,
} from './ContactUs.styled';
import { useTranslations } from 'next-intl';

export const ContactUs = () => {
  const t = useTranslations('ContactUs');

  return (
    <StyledContainer>
      <StyledContent>
        <StyledHeading>
          <Text>{t('Heading')}</Text>
        </StyledHeading>

        <Divider width={592} />

        <StyledText>
          <Text>
            {t('Text.Prefix')}{' '}
            <Link href={'./home'}>customerservice@luxeanimalspa.ca</Link>.{' '}
            {t('Text.Postfix')}
          </Text>
        </StyledText>

        <StyledFormContainer>
          <ContactForm />
        </StyledFormContainer>
      </StyledContent>
    </StyledContainer>
  );
};
