import {
  StyledButtonContainer,
  StyledControlContainer,
  StyledForm,
} from './ContactForm.styled';
import React, { useRef } from 'react';
import { Row } from '../Grid/Row';
import { Col } from '../Grid/Col';
import { Input } from '../Input';
import { TextArea } from '../TextArea';
import { Button } from '../Button';
import { Text } from '../Text';
import { useForm } from '@/app/shared/hooks/useForm';
import { CONTACT_FORM_SCHEMA, INITIAL_FORM_STATE } from './constants';
import { ValidationError } from 'yup';
import emailjs from '@emailjs/browser';
import { parseErrors } from './helpers';

/**
 * Form for "contact-us" page
 */
export const ContactForm = () => {
  const {
    errors,
    fields,
    isSubmitting,
    handleChangeIsSuccess,
    handleChangeValue,
    handleSetError,
    handleToggleIsSubmitting,
  } = useForm(INITIAL_FORM_STATE);
  const { email, firstName, lastName, phone, message } = fields;
  const form = useRef<HTMLFormElement>(null);

  const handleChangeInputValue =
    (key: string) =>
    ({
      target: { value },
    }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      handleChangeValue(key, value);
    };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    handleToggleIsSubmitting();

    try {
      await CONTACT_FORM_SCHEMA.validate(
        {
          email,
          firstName,
          lastName,
          phone,
          message,
        },
        { abortEarly: false }
      );

      if (form.current) {
        await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAIL_REGISTRATION_SERVICE,
          process.env.NEXT_PUBLIC_CONTACT_US_FORM_TEMPLATE,
          form.current,
          process.env.NEXT_PUBLIC_API_KEY
        );
      }

      handleChangeIsSuccess(true);
    } catch (error) {
      if (error instanceof ValidationError) {
        const errors = parseErrors(error.errors);

        for (const error in errors) {
          handleSetError(error, errors[error]);
        }
      } else {
        alert('Error while send form');
      }
    }

    handleToggleIsSubmitting();
  };

  return (
    <StyledForm ref={form} noValidate onSubmit={handleSubmit}>
      <Row gutter={78}>
        <Col span={12}>
          <StyledControlContainer>
            <Input
              disabled={isSubmitting}
              error={errors.firstName}
              onChange={handleChangeInputValue('firstName')}
              name="firstName"
              placeholder="First Name"
              value={firstName}
            />
          </StyledControlContainer>
        </Col>
        <Col span={12}>
          <StyledControlContainer>
            <Input
              disabled={isSubmitting}
              onChange={handleChangeInputValue('lastName')}
              name="lastName"
              placeholder="Last name"
              value={lastName}
            />
          </StyledControlContainer>
        </Col>
        <Col span={12}>
          <StyledControlContainer>
            <Input
              disabled={isSubmitting}
              error={errors.email}
              onChange={handleChangeInputValue('email')}
              name="email"
              placeholder="Email"
              value={email}
            />
          </StyledControlContainer>
        </Col>
        <Col span={12}>
          <StyledControlContainer>
            <Input
              disabled={isSubmitting}
              error={errors.phone}
              onChange={handleChangeInputValue('phone')}
              name="phone"
              placeholder="Phone number"
              value={phone}
            />
          </StyledControlContainer>
        </Col>
        <Col span={24}>
          <StyledControlContainer>
            <TextArea
              disabled={isSubmitting}
              error={errors.message}
              onChange={handleChangeInputValue('message')}
              name="message"
              placeholder="Your message goes here ..."
              value={message}
            />
          </StyledControlContainer>
        </Col>
      </Row>

      <StyledButtonContainer>
        <Button loading={isSubmitting} type="submit">
          <Text>Submit</Text>
        </Button>
      </StyledButtonContainer>
    </StyledForm>
  );
};
