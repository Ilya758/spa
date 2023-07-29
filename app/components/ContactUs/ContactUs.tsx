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

export const ContactUs = () => (
  <StyledContainer>
    <StyledContent>
      <StyledHeading>
        <Text>Contact</Text>
      </StyledHeading>

      <Divider width={592} />

      <StyledText>
        <Text>
          For customer service inquiries, please email us at{' '}
          <Link href={'./'}>customerservice@luxeanimalspa.ca</Link>. For spa
          inquiries, please include your animal’s name for faster service. For
          your protection, please do not include your credit card or banking
          information details in your email.
        </Text>
      </StyledText>

      <StyledFormContainer>
        <ContactForm />
      </StyledFormContainer>
    </StyledContent>
  </StyledContainer>
);
