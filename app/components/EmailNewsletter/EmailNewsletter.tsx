/* eslint-disable no-alert */

'use client';

import 'dotenv/config';
import { Card } from '@/stories/Card/Card';
import { Text } from '@/stories/Text';
import { Input } from '@/stories/Input';
import { Button } from '@/stories/Button';
import Image from 'next/image';
import { useRef } from 'react';
import { useForm } from '@/app/shared/hooks';
import {
  StyledActionContainer,
  StyledCardContent,
  StyledContainer,
  StyledContent,
  StyledDiscountText,
  StyledEmailConfirmationButton,
  StyledEmailConfirmationTipText,
  StyledEmailInputContainer,
  StyledHeading,
  StyledPictureContainer,
} from './EmailNewsletter.styled';
import { EMAIL_SCHEMA, INITIAL_FORM_STATE } from './constants';
import { EmailService } from '@/app/shared/services';
import { IEmailNewsletterSchema } from './models';

export const EmailNewsletter = () => {
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
      <StyledContent>
        <Card
          style={{
            maxHeight: '652px',
            height: '100%',
            maxWidth: '977px',
            width: '100%',
            margin: '0 auto',
          }}
        >
          <StyledCardContent>
            <StyledActionContainer>
              <StyledHeading>
                <Text.H4>Sign Up to Bark Newsletter</Text.H4>
              </StyledHeading>

              <StyledDiscountText>
                <Text>Get 10% Off Your First Spa Treatment</Text>
              </StyledDiscountText>

              <form ref={form} onSubmit={handleSubmit}>
                <StyledEmailInputContainer>
                  <Input
                    disabled={isSubmitting}
                    error={errors.email}
                    name="email"
                    onChange={handleChangeEmail}
                    placeholder="Email"
                    value={email}
                  />
                </StyledEmailInputContainer>

                <StyledEmailConfirmationButton>
                  <Button loading={isSubmitting} type="submit">
                    <Text>Sign Up</Text>
                  </Button>
                </StyledEmailConfirmationButton>
              </form>

              <StyledEmailConfirmationTipText>
                <Text>
                  *By completing this form you are signing up to receive our
                  emails and can unsubscribe at any time.
                </Text>
              </StyledEmailConfirmationTipText>
            </StyledActionContainer>

            <StyledPictureContainer>
              <Card>
                <Image
                  alt="Email picture"
                  src="/png/home/email-pic.png"
                  width={466}
                  height={430}
                  objectFit="contain"
                />
              </Card>
            </StyledPictureContainer>
          </StyledCardContent>
        </Card>
      </StyledContent>
    </StyledContainer>
  );
};
