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
import { useForm } from '@/app/shared/hooks';
import { CONTACT_FORM_SCHEMA, INITIAL_FORM_STATE } from './constants';
import { EmailService } from '@/app/shared/services';
import { IContactFormSchema } from './models';

/**
 * Form for "contact-us" page
 */
export const ContactForm = () => {
  const { errors, fields, isSubmitting, handleChangeValue, handleSubmitForm } =
    useForm<IContactFormSchema>(INITIAL_FORM_STATE);
  const { email, firstName, lastName, phone, message } = fields;
  const form = useRef<HTMLFormElement>(null);

  const handleChangeInputValue =
    (key: keyof IContactFormSchema) =>
    ({
      target: { value },
    }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      handleChangeValue(key, value);
    };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    handleSubmitForm({
      fields,
      validationSchema: CONTACT_FORM_SCHEMA,
      onSuccess: async () => {
        if (form.current) {
          await EmailService.sendEmail(form.current, 'contact_form');
        }
      },
    });
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
