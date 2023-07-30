/* eslint-disable no-alert */

'use client';

import 'dotenv/config';
import { Card } from '@/stories/Card/Card';
import { Text } from '@/stories/Text';
import { Input } from '@/stories/Input';
import { Button } from '@/stories/Button';
import Image from 'next/image';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ValidationError } from 'yup';
import { useForm } from '@/app/shared/hooks/useForm';
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

export const EmailNewsletter = () => {
  const {
    errors,
    fields: { email },
    isSubmitting,
    handleSetError,
    handleChangeValue,
    handleToggleIsSubmitting,
    handleChangeIsSuccess,
  } = useForm(INITIAL_FORM_STATE);
  const handleChangeEmail = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>): void => {
    handleChangeValue('email', value);
  };

  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    handleToggleIsSubmitting();

    try {
      await EMAIL_SCHEMA.validate(
        {
          email,
        },
        { abortEarly: false }
      );

      if (form.current) {
        await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAIL_REGISTRATION_SERVICE,
          process.env.NEXT_PUBLIC_EMAIL_REGISTRATION_TEMPLATE,
          form.current,
          process.env.NEXT_PUBLIC_API_KEY
        );
      }

      handleChangeIsSuccess(true);
    } catch (error) {
      if (error instanceof ValidationError) {
        const [emailError] = error.errors;
        handleSetError('email', emailError);
      } else {
        alert('Error while send form');
      }
    }

    handleToggleIsSubmitting();
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
